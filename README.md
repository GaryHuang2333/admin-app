# PCA Angular Demo Project

## 项目作者
[Ruoli](https://github.com/catkeeper1)
, [JansenGao](https://github.com/JansenGao)
, [Joey](https://github.com/joeyacn)
, [Gary](https://github.com/GaryHuang2333)
, [Andrew](https://github.com/AndrewOYLK)
, [Shuangyao](https://github.com/SayoJi)


## 项目目标
1. 使用最新版Angular实现用户管理前台示例项目
2. 基于Git及组件式开发规范实现Angular项目最佳实践


## 功能需求：

1. 登陆页面

2. 主页面.有菜单栏.当菜单项被点击时有一个新页面会被显示(可以暂时显示一个空白页面).可以有多个页面共存,用TAB来切换.

3. 当程序启动时,浏览器读取一部分代码.当点击某个菜单项在读取对应的模块的代码.

4. 实现一个对ROLE的CRUD功能. 一个ROLE有ROLE CODE, ROLE DESCRIPTION两个FIELD.每个ROLE有PARTENT ROLE,所以他们是以树形结构来组织的.

5. 实现一个对USER的CRUD功能. 一个USER有USER NAME, USER DESCRIPTION, PASSWORD, LOACKED字段.每个USER可以有0到多个ROLE.

6. 对服务端的请求应该全部通过一个COMMON PROGRAM来实现.这个PROGRAM应该在对服务器请求期间提供挡板挡着当前页面.如果服务器返回错误信息,会有错误提示.如果服务其返回未登陆,切换到登陆页面.

7. 对所有程序进行自动化UT.

8. 对所有页面也字段进行打桩,为SELENIUM自动化测试做准备.

 

## 非功能需求:

1. 使用PRIMENG组件

2. 响应式页面设计.在页面尺寸发生变化(不太大的情况下) 页面依然能正确显示.

3. 使用CSS STYLE来定义组件的位置和式样.程序员不需要在页面中调整组件的X Y坐标来达到组件对齐效果.

<hr/><hr/>

# Guidance 

## Get Project From GitHub

Run  `git clone https://github.com/GaryHuang2333/admin-app.git` to pull project from github

Run `npm install` inside Folder `/admin-app` to install the application

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build for Static (SPA Mode)

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Build for Server Render (SSR Mode)

1. Run `ngm run server:build` to build the project.

2. Run `ngm run server` to run the project.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).