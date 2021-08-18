export const POST = 'post';
export const GET = 'get';
// export const END_POINT = 'https://wxapp.sinovacbio.cn/s';

// export const END_POINT = 'http://192.168.1.18:8080';
// export const END_POINT = 'http://wxapp.sinovacbio.cn/s';

//文件服务器路径
// export const FILE_SERVER_HOST = 'http://10.11.40.233:8443/'
export const END_POINT = 'http://10.11.40.233:8300';


export const FILE_SERVER_HOST = 'https://wxapp.sinovacbio.cn'
// export const END_POINT = 'https://wxapp.sinovacbio.cn/s';

export const APIS ={
  login: ['/xh/sport/login/login', POST],

  changePassword:['/login/changePwd',GET],
  //检查session
  checkSession:['/login/checkSession',GET],

  //报表
  getSummaryInfo:["/report/summaryInfo",GET],
  getTimesInfo:["/report/timesInfo",POST],
  getFeedbackList:["/report/feedbackPageList",POST],
  exportFeedback:["/report/exportFeedback",POST],

  //项目
  projectPageList:["/xh/sport/community/list",GET],
  saveProject:["/xh/sport/community/save",POST],
  deleteProject:["/xh/sport/community/del",POST],
  //活动
  activityPageList:["/xh/sport/sport/list",GET],
  saveActivity:["/xh/sport/sport/save",POST],
  deleteActivity:["/xh/sport/sport/del",POST],
  //用户
  registerInfoList:["/xh/sport/registerInfo/registerInfoList",GET],
  saveUser:["/platUser/savePlatUser",POST],
  deleteUser:["/platUser/deletePlatUser",POST],
  export:["/xh/sport/registerInfo/export",POST],
  listByPage:["/xh/sport/registerInfo/listByPage",POST],

  //系统配置
  getSysConf:["/xh/sport/sysConf/get",GET],
  saveSysConf:["/xh/sport/sysConf/save",POST],
  //反馈
  feedbackList:["/xh/sport/feedback/listByPage",POST],



};
