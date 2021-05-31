/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'swiper/vue' {
    import _Vue from 'vue'
    export class Swiper extends _Vue {}
    export class SwiperSlide extends _Vue {}
}
declare module '*.json' {
    const value: any;
    export default value;
}
// declare module '*.ts' {
//     const value: any;
//     export default value;
// }
// import * as axios from 'axios'
// declare module 'axios' {
//     interface AxiosInstance {
//       (config: AxiosRequestConfig): Promise<any>
//     }
//   }

