export const request=(params)=>{
  return new Promise((resolve,reject)=>{
    wx.request({
      ...params,
      success:(result)=>{
        resolve(result);
      },
      fail:(err)=>{
        reject(err)
      }
    })
  })
}


// export const request=(params)=>{
//   return new Promise((resolve,reject)=>{
//     wx.request({
//       ...params,
//       success:(resulr)=>{
//         resolve(result)
//       },
//       fail:(err)=>{
//         reject(err)
//       }
//     })
//   })
// }

// export const request=(params)=>{
//   return new Promise((resolve,reject)=>{
//     wx.request({
//       ...params,
//       success:(result)=>{
//         resolve(result)
//       },
//       fail:(err)=>{
//         reject(err)
//       }
//     })
//   })
// }

// //封装网络请求
// export const request=(params)=>{
//   return new Promise((resolve,reject)=>{
//     wx.request({
//       ...params,
//       success:(result)=>{
//         resolve(result)
//       },
//       fail:(err)=>{
//         reject(err)
//       }
//     })
//   })
// }