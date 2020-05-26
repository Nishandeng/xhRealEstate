//反馈卡内容
module.exports =
    [{
        "type": "radio",
        "fk": "occurPeriod",
        "title": "本次反馈信息所属时段:",
        "options": [{
            "label": "接种后0-30分钟",
            "value": 1
        },
            {
                "label": "接种后30分钟-24小时",
                "value": 2
            },
            {
                "label": "接种后24小时-48小时",
                "value": 3
            },
            {
                "label": "接种后48小时-72小时",
                "value": 4
            }
        ]
    },
        {
        "fk": "temperature",
        "type": "input",
        "title": "今日体温(℃)："
    },
        {
        "type": "radio",
        "fk": "haveReaction",
        "title": "今日发生任何不良反应/事件:",
        "options": [{
            "label": "否",
            "value": 1
        }, {
            "label": "是",
            "value": 2
        }]
    },
        {
        "type": "radio",
        "fk": "haveInjectLocationReaction",
        "title": " 发生接种部位（局部）症状:",
        "options": [{
            "label": "否",
            "value": 1
        }, {
            "label": "是",
            "value": 2
        }]
    },
        {
        "type": "radio",
        "fk": "haveInjectLocationPain",
        "title": "有接种部位疼痛:",
        "options": [{
            "label": "否",
            "value": 0
        }, {
            "label": "不影响或轻微影响肢体活动肢体活动",
            "value": 1
        }, {
            "label": "影响肢体活动",
            "value": 2
        }, {
            "label": "影响日常生活",
            "value": 3
        }, {
            "label": "丧失基本自理能力，或住院",
            "value": 4
        }]
    },
        {
        "type": "radio",
        "fk": "haveInjectLocationHarden",
        "title": "有接种部位硬结:",
        "options": [{
            "label": "否",
            "value": 1
        }, {
            "label": "是",
            "value": 2,
            "children": [{
                "fk": "injectLocationHardenLen",
                "type": "input",
                "title": "硬结最长直径(cm)"
            }, {
                "fk": "haveInjectLocationHarden",
                "type": "radio",
                "title": "影响日常生活:",
                "options": [{
                    "label": "不影响日常生活",
                    "value": 1
                },
                    {
                        "label": "轻微影响日常生活",
                        "value": 2
                    },
                    {
                        "label": "影响日常生活",
                        "value": 3
                    }, {
                        "label": "严重影响日常生活",
                        "value": 4
                    }
                ]
            }, {
                "fk": "haveInjectLocationHardenEffectLife",
                "type": "radio",
                "title": "是否出现溃烂、继发感染、静脉炎、无菌性脓肿、创口引流、脓肿、剥脱性皮炎、真皮或深层组织坏死:",
                "options": [{
                    "label": "否",
                    "value": 1
                }, {
                    "label": "是",
                    "value": 2
                }]
            }]
        }]
    }, {
        "type": "radio",
        "fk": "haveInjectLocationHardenBroken",
        "title": "有接种部位肿胀：",
        "options": [{
            "label": "否",
            "value": 1
        }, {
            "label": "是",
            "value": 2,
            "children": [{
                "fk": "injectLocationSwellLen",
                "type": "input",
                "title": "肿胀最长直径(cm):"
            }, {
                "fk": "haveInjectLocationSwellEffectLife",
                "type": "radio",
                "title": "是否影响日常生活:",
                "options": [{
                    "label": "不影响日常生活",
                    "value": 1
                },
                    {
                        "label": "轻微影响日常生活",
                        "value": 2
                    }, {
                        "label": "影响日常生活",
                        "value": 3
                    }, {
                        "label": "严重影响日常生活",
                        "value": 4
                    }
                ]
            }, {
                "fk": "haveInjectLocationSwellBroken",
                "type": "radio",
                "title": "出现溃烂、继发感染、静脉炎、无菌性脓肿、创口引流、脓肿、剥脱性皮炎、真皮或深层组织坏死:",
                "options": [{
                    "label": "否",
                    "value": 1
                }, {
                    "label": "是",
                    "value": 2
                }]
            }]
        }]
    }, {
        "type": "radio",
        "fk": "haveInjectLocationRed",
        "title": "有接种部位红晕:",
        "options": [{
            "label": "否",
            "value": 1
        }, {
            "label": "是",
            "value": 2,
            "children": [{
                "fk": "injectLocationRedLen",
                "type": "input",
                "title": "红晕最长直径(cm):"
            }, {
                "fk": "haveInjectLocationRedEffectLife",
                "type": "radio",
                "title": "影响日常生活。",
                "options": [{
                    "label": "不影响日常生活",
                    "value": 1
                },
                    {
                        "label": "轻微影响日常生活",
                        "value": 2
                    }, {
                        "label": "影响日常生活",
                        "value": 3
                    }, {
                        "label": "严重影响日常生活",
                        "value": 4
                    }
                ]
            }, {
                "fk": "haveInjectLocationRedBroken",
                "type": "radio",
                "title": "出现溃烂、继发感染、静脉炎、无菌性脓肿、创口引流、脓肿、剥脱性皮炎、真皮或深层组织坏死。",
                "options": [{
                    "label": "否",
                    "value": 1
                }, {
                    "label": "是",
                    "value": 2
                }]
            }]
        }]
    }, {
        "type": "radio",
        "fk": "haveInjectLocationRash",
        "title": "有接种部位皮疹(注射部位)。",
        "options": [{
            "label": "否",
            "value": 1
        }, {
            "label": "是",
            "value": 2,
            "children": [{
                "fk": "injectLocationRashLen",
                "type": "input",
                "title": "皮疹最长直径(cm)"
            }, {
                "fk": "haveInjectLocationRashEffectLife",
                "type": "radio",
                "title": "影响日常生活。",
                "options": [{
                    "label": "不影响日常生活",
                    "value": 1
                },
                    {
                        "label": "轻微影响日常生活",
                        "value": 2
                    }, {
                        "label": "影响日常生活",
                        "value": 3
                    }, {
                        "label": "严重影响日常生活",
                        "value": 4
                    }
                ]
            }, {
                "fk": "haveInjectLocationRashBroken",
                "type": "radio",
                "title": "出现溃烂、继发感染、静脉炎、无菌性脓肿、创口引流、脓肿、剥脱性皮炎、真皮或深层组织坏死:",
                "options": [{
                    "label": "否",
                    "value": 1
                }, {
                    "label": "是",
                    "value": 2
                }]
            }]
        }]
    }, {
        "type": "radio",
        "fk": "haveInjectLocationItch",
        "title": "有接种部位瘙痒:",
        "options": [{
            "label": "否",
            "value": 1
        }, {
            "label": "是",
            "value": 2,
            "children": [{
                "type": "radio",
                "fk": "haveInjectLocationItch",
                "title": "瘙痒严重程度:",
                "options": [{
                    "label": "不影响日常生活",
                    "value": 1
                }, {
                    "label": "轻度影响日常生活",
                    "value": 2
                }, {
                    "label": "影响日常生活",
                    "value": 3
                }]
            }]
        }]
    }, {
        "type": "radio",
        "fk": "havefktouchLocationReaction",
        "title": "发生非接种部位（全身）症状:",
        "options": [{
            "label": "否",
            "value": 1
        }, {
            "label": "是",
            "value": 2
        }]
    }, {
        "type": "radio",
        "fk": "havefktouchLocationEmergencyReaction",
        "title": "有急性过敏反应。",
        "options": [{
            "label": "否",
            "value": 1
        }, {
            "label": "是",
            "value": 2,
            "children": [{
                "type": "radio",
                "fk": "havefktouchLocationEmergencyReaction",
                "title": "应急过敏反应症状:",
                "options": [{
                    "label": "局部荨麻疹(水疱)，无需治疗",
                    "value": 1
                }, {
                    "label": "局部荨麻疹，需治疗或轻度血管性水肿，无需治疗",
                    "value": 2
                }, {
                    "label": "广泛荨麻疹或血管性水肿需治疗或轻度支气管痉挛",
                    "value": 3
                }, {
                    "label": "过敏性休克或威胁生命的支气管痉挛或喉头水肿",
                    "value": 4
                }]
            }]
        }]
    }, {
        "type": "radio",
        "fk": "havefktouchLocationSkinMucosaReaction",
        "title": "有皮肤粘膜异常:",
        "options": [{
            "label": "否",
            "value": 1
        }, {
            "label": "是",
            "value": 2,
            "children": [{
                "type": "radio",
                "fk": "havefktouchLocationSkinMucosaReaction",
                "title": "皮肤黏膜异常症状:",
                "options": [{
                    "label": "红斑/瘙痒/颜色改变",
                    "value": 1
                }, {
                    "label": "弥漫性皮疹/斑丘疹/干燥/脱屑",
                    "value": 2
                }, {
                    "label": "疱状/渗出/脱屑/溃疡",
                    "value": 3
                }, {
                    "label": "剥脱性皮炎累及粘膜，或多型性红斑，或疑似Stevens-Johnsons综合症",
                    "value": 4
                }]
            }]
        }]
    }, {
        "type": "radio",
        "fk": "havefktouchLocationDiarrheaReaction",
        "title": "有腹泻:",
        "options": [{
            "label": "否",
            "value": 1
        }, {
            "label": "是",
            "value": 2,
            "children": [{
                "type": "radio",
                "fk": "havefktouchLocationDiarrheaReaction",
                "title": "腹泻严重程度。",
                "options": [{
                    "label": "轻微或一过性，3～4次/天，粪便性状异常，或轻微腹泻持续小于1周",
                    "value": 1
                }, {
                    "label": "中度或持续性，5～7次/天，粪便性状异常，或腹泻＞1周",
                    "value": 2
                }, {
                    "label": "＞7次/天，粪便性状异常，或出血性腹泻，直立性低血压，电解质失衡，需静脉输液＞2L",
                    "value": 3
                }, {
                    "label": "低血压休克，需住院治疗",
                    "value": 4
                }]
            }]
        }]
    }, {
        "type": "radio",
        "fk": "havefktouchLocationAfkrexiaReaction",
        "title": "有厌食:",
        "options": [{
            "label": "否",
            "value": 1
        }, {
            "label": "是",
            "value": 2,
            "children": [{
                "type": "radio",
                "fk": "havefktouchLocationAfkrexiaReaction",
                "title": "厌食严重程度:",
                "options": [{
                    "label": "食欲下降，但不减少食物摄入",
                    "value": 1
                }, {
                    "label": "食欲下降，食物摄入减少，但体重未明显降低",
                    "value": 2
                }, {
                    "label": "食欲下降，且体重明显降低",
                    "value": 3
                }, {
                    "label": "需要措施干预(如胃管喂食、肠外营养)",
                    "value": 4
                }]
            }]
        }]
    }, {
        "type": "radio",
        "fk": "havefktouchLocationVomitReaction",
        "title": "是否呕吐:",
        "options": [{
            "label": "否",
            "value": 1
        }, {
            "label": "是",
            "value": 2,
            "children": [{
                "type": "radio",
                "fk": "havefktouchLocationVomitReaction",
                "title": "呕吐严重程度:",
                "options": [{
                    "label": "1~2次/24小时且不影响活动",
                    "value": 1
                }, {
                    "label": "3～5次/24小时或活动受限",
                    "value": 2
                }, {
                    "label": "24小时内＞6次或需要静脉补液",
                    "value": 3
                }, {
                    "label": "由于低血压休克需要住院或其他途径营养",
                    "value": 4
                }]
            }]
        }]
    }, {
        "type": "radio",
        "fk": "havefktouchLocationNauseaReaction",
        "title": "是否恶心:",
        "options": [{
            "label": "否",
            "value": 1
        }, {
            "label": "是",
            "value": 2,
            "children": [{
                "type": "radio",
                "fk": "havefktouchLocationNauseaReaction",
                "title": "恶心情况:",
                "options": [{
                    "label": "一过性(＜24小时)或间歇性且摄入食物基本正常",
                    "value": 1
                }, {
                    "label": "持续的恶心导致食物摄入减少(24～48小时)",
                    "value": 2
                }, {
                    "label": "持续的恶心导致几乎无食物摄入(＞48小时)或需要静脉补液",
                    "value": 3
                }, {
                    "label": "威胁生命(如低血压休克)",
                    "value": 4
                }]
            }]
        }]
    }, {
        "type": "radio",
        "fk": "havefktouchLocationMusclePainReaction",
        "title": "有肌肉痛(非接种部位):",
        "options": [{
            "label": "否",
            "value": 1
        }, {
            "label": "是",
            "value": 2,
            "children": [{
                "type": "radio",
                "fk": "havefktouchLocationMusclePainReaction",
                "title": "疼痛严重程度:",
                "options": [{
                    "label": "不影响日常活动",
                    "value": 1
                },
                    {
                        "label": "轻微影响日常活动",
                        "value": 2
                    },
                    {
                        "label": "重度肌肉疼痛，严重影响日常活动",
                        "value": 3
                    },
                    {
                        "label": "急诊或住院",
                        "value": 4
                    }
                ]
            }]
        }]
    }, {
        "type": "radio",
        "fk": "havefktouchLocationHeadacheReaction",
        "title": "有头痛:",
        "options": [{
            "label": "否",
            "value": 1
        }, {
            "label": "是",
            "value": 2,
            "children": [{
                "type": "radio",
                "fk": "havefktouchLocationHeadacheReaction",
                "title": "头疼严重程度:",
                "options": [{
                    "label": "不影响活动，无需治疗",
                    "value": 1
                }, {
                    "label": "一过性，轻微影响日常活动，可能需治疗或干预",
                    "value": 2
                }, {
                    "label": "严重影响日常活动，需要治疗或干预",
                    "value": 3
                }, {
                    "label": "顽固性，需急诊或住院",
                    "value": 4
                }]
            }]
        }]
    }, {
        "type": "radio",
        "fk": "havefktouchLocationCoughReaction",
        "title": "有咳嗽。",
        "options": [{
            "label": "否",
            "value": 1
        }, {
            "label": "是",
            "value": 2,
            "children": [{
                "type": "radio",
                "fk": "havefktouchLocationCoughReaction",
                "title": "咳嗽严重程度:",
                "options": [{
                    "label": "一过性，无需治疗",
                    "value": 1
                }, {
                    "label": "持续咳嗽，治疗有效",
                    "value": 2
                }, {
                    "label": "阵发咳嗽，治疗无法控制",
                    "value": 3
                }, {
                    "label": "急诊或住院",
                    "value": 4
                }]
            }]
        }]
    }, {
        "type": "radio",
        "fk": "havefktouchLocationTiredReaction",
        "title": "有疲劳、乏力:",
        "options": [{
            "label": "否",
            "value": 1
        }, {
            "label": "是",
            "value": 2,
            "children": [{
                "type": "radio",
                "fk": "havefktouchLocationTiredReaction",
                "title": "疲劳、乏力严重程度:",
                "options": [{
                    "label": "正常活动减弱＜48小时，不影响活动",
                    "value": 1
                }, {
                    "label": "正常活动减弱20%～50%＞48 小时，稍影响活动",
                    "value": 2
                }, {
                    "label": "正常活动减弱＞50%，严重影响日常活动，不能工作",
                    "value": 3
                }, {
                    "label": "不能自理，急诊或住院",
                    "value": 4
                }]
            }]
        }]
    }, {
        "type": "radio",
        "fk": "haveOtherReaction",
        "title": "除以上列出不适外，有其他不适或临床事件:",
        "options": [{
            "label": "否",
            "value": 1
        }, {
            "label": "是",
            "value": 2,
            "children": [{
                "fk": "otherReactionDetail",
                "type": "textarea",
                "title": "具体症状"
            }, {
                "fk": "haveOtherReaction",
                "type": "radio",
                "title": "选择严重程度",
                "options": [{
                    "label": "轻度：短时（＜48h）或轻微不适，不影响活动，无需治疗",
                    "value": 1
                }, {
                    "label": "中度：轻度或中度活动受限，可能需就诊、不需或仅需轻度治疗 ",
                    "value": 2
                }, {
                    "label": "重度：活动明显 受限，需就诊并接受治疗，可能需要住院",
                    "value": 3
                }, {
                    "label": "危重：可能威胁生命，活动严重受限，需监护治疗",
                    "value": 4
                }]
            }]
        }]
    }]