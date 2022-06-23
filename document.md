angular 组件里的方法，组件之间是没办法互相调用的

如果有一些公共的功能，我们放在 angular 的服务里

想在组件里用那个方法，只要在组件里把服务引入，就可以用这个公共的方法

## 1。服务的使用

创建服务命令

ng g service my-new-service

创建到指定目录下面：服务很多的话就放到目录下面

ng g service services/storage 会创建到 app/services 就会创建 storage 服务

## 2.app.module.ts 里面引入创建的服务

import {StorageService} from './services/storage.service'

providers:[StorageService]

3.在用到的组件里面

//引入服务

import {StorageService} from '../../services/storage.service'

//初始化

constructor(public storage:StorageService){

​ let s=this.storage.get()

​ console.log(s)

}

#### 服务之间可以相互调用，组件之间不能相互调用，组件能调用服务，组件之间可以父子传值，服务没法调用组件的方法
