# OneAI S3

**Maintainer:** william · **Support:** service@oneaiglobal.biz

OneAI 的 RustFS/S3 兼容对象存储部署封装。原始上传文件、预览对象和图片结果由 API 使用服务端凭证访问；浏览器只使用短时签名 URL。

## 本地运行

```bash
cp .env.example .env
docker compose -f deploy/docker/compose.yaml --env-file .env up -d
curl -f http://127.0.0.1:${S3_PORT:-13215}/minio/health/live
```

不要复用旧版 OneAI 的 volume。生产环境使用 Secrets Manager/Kubernetes Secret 注入账号，启用 TLS、生命周期策略、备份和删除审计。
