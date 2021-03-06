// 这个文件是angular根模块，告诉angular如何组装应用

//angular核心模块
import { NgModule } from '@angular/core';
//浏览器解析的模块
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewsComponent } from './components/news/news.component';

//@NgModule装饰器，@NgModule接收一个元数据对象，告诉angular如何编译和启动应用
@NgModule({
  declarations: [
    //配置当前项目运行的组件
    AppComponent,
    NewsComponent,
  ],
  imports: [
    //配置当前模块运行依赖的其他模块
    BrowserModule,
  ],
  providers: [], //配置项目所需要的服务
  bootstrap: [AppComponent], //指定应用的主视图（称为根组件） 通过引导根AppModule来启动应用，这里一般写的是根组件
})

//根模块不需要导出任何东西，因为其他组件不需要导入根模块
export class AppModule {}
