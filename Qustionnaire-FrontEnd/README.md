# React + TypeScript + Vite

## 路由设计
   - 首页 '/'
   - 登录 '/login'
   - 注册 'register'
   - 问卷管理
      - 我的问卷 '/manager/list'
      - 星标问卷 '/manager/star'
      - 回收站 '/manager/trash'
   - 问卷详情
      - 编辑问卷 '/question/edit/:id' (动态路由)
      - 问卷统计 '/question/stat/:id'
   - 404

### Layout 
   - MainLayout
   - ManageLayout
   - QuestionLayout