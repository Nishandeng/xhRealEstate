export const POST = 'post';
export const GET = 'get';
// export const END_POINT = 'https://wxapp.sinovacbio.cn/s';

// export const END_POINT = 'http://192.168.1.18:8080';
// export const END_POINT = 'http://wxapp.sinovacbio.cn/s';

//文件服务器路径
// export const FILE_SERVER_HOST = 'http://10.11.40.233:8443/'
// export const END_POINT = 'http://10.11.40.233:8080';


export const FILE_SERVER_HOST = 'https://wxapp.sinovacbio.cn'
export const END_POINT = 'https://wxapp.sinovacbio.cn/s';

export const APIS ={
  login: ['/login/login', GET],

  changePassword:['/login/changePwd',GET],
  //检查session
  checkSession:['/login/checkSession',GET],

  //报表
  getSummaryInfo:["/report/summaryInfo",GET],
  getTimesInfo:["/report/timesInfo",POST],
  getFeedbackList:["/report/feedbackPageList",POST],
  exportFeedback:["/report/exportFeedback",POST],

  //项目
  projectPageList:["/platUser/platUserPageList",POST],
  saveProject:["/platUser/savePlatUser",POST],
  deleteProject:["/platUser/deletePlatUser",GET],
  //活动
  activityPageList:["/platUser/platUserPageList",POST],
  saveActivity:["/platUser/savePlatUser",POST],
  deleteActivity:["/platUser/deletePlatUser",GET],
  //用户
  userPageList:["/platUser/platUserPageList",POST],
  saveUser:["/platUser/savePlatUser",POST],
  deleteUser:["/platUser/deletePlatUser",GET],

};
