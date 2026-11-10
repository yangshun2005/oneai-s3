# OneAI S3 运行契约

| 用途 | 访问方式 | 约束 |
|---|---|---|
| API 上传/读取 | 私有容器网络 `S3_ENDPOINT` | 只允许 API 服务端凭证 |
| 浏览器预览/下载 | API 生成短时 signed URL | 不暴露 access key/secret |
| 健康检查 | `GET /minio/health/live` | 只用于 readiness/liveness |

对象 key 必须包含租户/用户边界和资源类型。删除文档时同步删除对象、数据库 chunk、向量和缓存；失败操作进入可重试状态。不要把用户 prompt、模型 key 或真实密码写入日志。
