import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const root = new URL('../', import.meta.url);
test('S3 deployment contract keeps credentials external and binds loopback by default', async () => {
  const compose = await readFile(new URL('deploy/docker/compose.yaml', root), 'utf8');
  const env = await readFile(new URL('.env.example', root), 'utf8');
  const api = await readFile(new URL('docs/API.md', root), 'utf8');
  assert.match(compose, /RUSTFS_ACCESS_KEY: \$\{S3_ACCESS_KEY/);
  assert.match(compose, /127\.0\.0\.1:\$\{S3_PORT/);
  assert.match(compose, /health\/live/);
  assert.match(env, /S3_SECRET_KEY=change-me/);
  assert.match(api, /signed URL/);
  assert.doesNotMatch(compose, /service@oneaiglobal\.biz|vKx8/);
});
