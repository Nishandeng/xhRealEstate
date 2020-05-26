//反馈卡内容
import RegExp from './regExp'
export const INPUT = 'input';
export const RADIO = 'radio';
export const TEXT = 'text';
export const DEFAULT_RES = 1;

export const SPECIAL_POINTS={
    OCCUR_PERIOD:'occurPeriod',
    HAVE_REACTION:'haveReaction',
}

export const questions=
    [
        {
            "no": "1",
            "type": "radio",
            "fk": "occurPeriod",
            "question": "请选择本次反馈信息所属时段",
            "rule":RegExp.NULL,
            "options": [
                {"label": "接种后0-30分钟", "value": 1},
                {"label": "接种后30分钟-24小时", "value": 2},
                {"label": "接种后24小时-48小时", "value": 3},
                {"label": "接种后48小时-72小时", "value": 4}
            ]
        },
        {
            "no": "2",
            "fk": "temperature",
            "type": "input",
            "question": "今日体温(℃)：",
            "rule":RegExp.TEMPERATURE,
        },
        {
            "no": "3",
            "type": "radio",
            "fk": "haveReaction",
            "question": "今日是否发生任何不良反应/事件:",
            "rule":RegExp.NULL,
            "options": [
                {"label": "否", "value": 1},
                {"label": "是", "value": 2}
            ]
        },
        {
            "no": "4",
            "type": "radio",
            "fk": "haveInjectLocationReaction",
            "question": " 发生接种部位（局部）症状:",
            "rule":RegExp.NULL,
            "options": [
                {"label": "否", "value": 1},
                {"label": "是", "value": 2}
            ]
        },
        {
            "no": "5",
            "type": "radio",
            "fk": "haveInjectLocationPain",
            "question": "是否有接种部位疼痛？",
            "rule":RegExp.NULL,
            "options": [
                {"label": "否", "value": 1},
                {"label": "是", "value": 2}
            ]
        },
        {
            "no": "5-1",
            "type": "radio",
            "fk": "injectLocationPainEffect",
            "question": "是否影响日常生活？",
            "rule":RegExp.NULL,
            "options": [
                {"label": "有疼痛，不影响或轻微影响肢体活动", "value": 1},
                {"label": "有疼痛，影响肢体活动", "value": 2},
                {"label": "有疼痛，影响日常生活", "value": 3},
                {"label": "有疼痛，丧失基本自理能力，或住院", "value": 4}
            ]
        },
        {
            "no": "6",
            "type": "radio",
            "fk": "haveInjectLocationHarden",
            "question": "是否有接种部位硬结？",
            "rule":RegExp.NULL,
            "subAmount":3,
            "options": [
                {"label": "否", "value": 1},
                {"label": "是", "value": 2}
            ]
        },
        {
            "no": "6-1",
            "type": "input",
            "fk": "injectLocationHardenLen",
            "question": "硬结最长直径(cm):",
            "rule":RegExp.NUM,
        },
        {
            "no": "6-2",
            "type": "radio",
            "fk": "injectLocationHardenEffect",
            "question": "是否影响日常生活？",
            "rule":RegExp.NULL,
            "options": [
                {"label": "不影响日常生活", "value": 1},
                {"label": "轻微影响日常生活", "value": 2},
                {"label": "影响日常生活", "value": 3},
                {"label": "严重影响日常生活", "value": 4}
            ]
        },
        {
            "no": "6-3",
            "type": "radio",
            "fk": "haveInjectLocationHardenBroken",
            "question": "是否出现溃烂、继发感染、静脉炎、无菌性脓肿、创口引流、脓肿、剥脱性皮炎、真皮或深层组织坏死？",
            "rule":RegExp.NULL,
            "options": [
                {"label": "否", "value": 1},
                {"label": "是", "value": 2}
            ]
        },
        {
            "no": "7",
            "type": "radio",
            "fk": "haveInjectLocationHardenSwell",
            "question": "是否有接种部位肿胀？",
            "rule":RegExp.NULL,
            "subAmount":3,
            "options": [
                {"label": "否", "value": 1},
                {"label": "是", "value": 2}
            ]
        },
        {
            "no": "7-1",
            "type": "input",
            "fk": "injectLocationSwellLen",
            "question": "肿胀最长直径(cm)",
            "rule":RegExp.NUM,
        },
        {
            "no": "7-2",
            "type": "radio",
            "fk": "injectLocationSwellEffect",
            "question": "是否影响日常生活？",
            "rule":RegExp.NULL,
            "options": [
                {"label": "不影响日常生活", "value": 1},
                {"label": "轻微影响日常生活", "value": 2},
                {"label": "影响日常生活", "value": 3},
                {"label": "严重影响日常生活", "value": 4}
            ]
        },
        {
            "no": "7-3",
            "type": "radio",
            "fk": "haveInjectLocationSwellBroken",
            "question": "是否出现溃烂、继发感染、静脉炎、无菌性脓肿、创口引流、脓肿、剥脱性皮炎、真皮或深层组织坏死?",
            "rule":RegExp.NULL,
            "options": [
                {"label": "否", "value": 1},
                {"label": "是", "value": 2}
            ]
        },
        {
            "no": "8",
            "type": "radio",
            "fk": "haveInjectLocationRed",
            "question": "是否有接种部位红晕?",
            "rule":RegExp.NULL,
            "subAmount":3,
            "options": [
                {"label": "否", "value": 1},
                {"label": "是", "value": 2}
            ]
        },
        {
            "no": "8-1",
            "type": "input",
            "fk": "injectLocationRedLen",
            "question": "红晕最长直径(cm)",
            "rule":RegExp.NUM,
        },
        {
            "no": "8-2",
            "type": "radio",
            "fk": "injectLocationRedEffect",
            "question": "是否影响日常生活",
            "rule":RegExp.NULL,
            "options": [
                {"label": "不影响日常生活", "value": 1},
                {"label": "轻微影响日常生活", "value": 2},
                {"label": "影响日常生活", "value": 3},
                {"label": "严重影响日常生活", "value": 4}
            ]
        },
        {
            "no": "8-3",
            "type": "radio",
            "fk": "haveInjectLocationRedBroken",
            "question": "是否红晕出现是否出现溃烂、继发感染、静脉炎、无菌性脓肿、创口引流、脓肿?",
            "rule":RegExp.NULL,
            "options": [
                {"label": "否", "value": 1},
                {"label": "是", "value": 2}
            ]
        },
        {
            "no": "9",
            "type": "radio",
            "fk": "haveInjectLocationRash",
            "question": "是否有接种部位(注射部位)皮疹?",
            "rule":RegExp.NULL,
            "subAmount":3,
            "options": [
                {"label": "否", "value": 1},
                {"label": "是", "value": 2}
            ]
        },
        {
            "no": "9-1",
            "type": "input",
            "fk": "injectLocationRashLen",
            "question": "皮疹最长直径(cm)",
            "rule":RegExp.NUM,
        },
        {
            "no": "9-2",
            "type": "radio",
            "fk": "injectLocationRashEffect",
            "question": "是否影响日常生活",
            "rule":RegExp.NULL,
            "options": [
                {"label": "不影响日常生活", "value": 1},
                {"label": "轻微影响日常生活", "value": 2},
                {"label": "影响日常生活", "value": 3},
                {"label": "严重影响日常生活", "value": 4}
            ]
        },
        {
            "no": "9-3",
            "type": "radio",
            "fk": "haveInjectLocationRashBroken",
            "question": "是否出现溃烂、继发感染、静脉炎、无菌性脓肿、创口引流、脓肿、剥脱性皮炎、真皮或深层组织坏死?",
            "rule":RegExp.NULL,
            "options": [
                {"label": "否", "value": 1},
                {"label": "是", "value": 2}
            ]
        },
        {
            "no": "10",
            "type": "radio",
            "fk": "haveInjectLocationItch",
            "question": "是否有接种部位瘙痒?",
            "rule":RegExp.NULL,
            "subAmount":1,
            "options": [
                {"label": "否", "value": 1},
                {"label": "是", "value": 2}
            ]
        },
        {
            "no": "10-1",
            "type": "radio",
            "fk": "injectLocationItchEffect",
            "question": "瘙痒严重程度?",
            "rule":RegExp.NULL,
            "options": [
                {"label": "不影响日常生活", "value": 1},
                {"label": "轻度影响日常生活", "value": 2},
                {"label": "影响日常生活", "value": 3}
            ]
        },
        {
            "no": "11",
            "type": "radio",
            "fk": "haveNotouchLocationReaction",
            "question": "是否发生非接种部位（全身）症状?",
            "rule":RegExp.NULL,
            "options": [
                {"label": "否", "value": 1},
                {"label": "是", "value": 2}
            ]
        },
        {
            "no": "12",
            "type": "radio",
            "fk": "haveNotouchLocationEmergencyReaction",
            "question": "是否有急性过敏反应?",
            "rule":RegExp.NULL,
            "subAmount":1,
            "options": [
                {"label": "否", "value": 1},
                {"label": "是", "value": 2}
            ]
        },
        {
            "no": "12-1",
            "type": "radio",
            "fk": "notouchLocationEmergencyEffect",
            "question": "应急过敏反应症状?",
            "rule":RegExp.NULL,
            "options": [
                {"label": "局部荨麻疹(水疱)，无需治疗", "value": 1},
                {"label": "局部荨麻疹，需治疗或轻度血管性水肿，无需治疗", "value": 2},
                {"label": "广泛荨麻疹或血管性水肿需治疗或轻度支气管痉挛", "value": 3},
                {"label": "过敏性休克或威胁生命的支气管痉挛或喉头水肿", "value": 4}
            ]
        },
        {
            "no": "13",
            "type": "radio",
            "fk": "haveNotouchLocationSkinMucosaReaction",
            "question": "是否有皮肤粘膜异常?",
            "rule":RegExp.NULL,
            "subAmount":1,
            "options": [
                {"label": "否", "value": 1},
                {"label": "是", "value": 2}
            ]
        },
        {
            "no": "13-1",
            "type": "radio",
            "fk": "notouchLocationSkinMucosaEffect",
            "question": "皮肤黏膜异常具体表现?",
            "rule":RegExp.NULL,
            "options": [
                {"label": "红斑/瘙痒/颜色改变", "value": 1},
                {"label": "弥漫性皮疹/斑丘疹/干燥/脱屑", "value": 2},
                {"label": "疱状/渗出/脱屑/溃疡", "value": 3},
                {"label": "剥脱性皮炎累及粘膜，或多型性红斑，或疑似Stevens-Johnsons综合症", "value": 4}
            ]
        },
        {
            "no": "14",
            "type": "radio",
            "fk": "haveNotouchLocationDiarrheaReaction",
            "question": "是否有腹泻?",
            "rule":RegExp.NULL,
            "subAmount":1,
            "options": [
                {"label": "否", "value": 1},
                {"label": "是", "value": 2}
            ]
        },
        {
            "no": "14-1",
            "type": "radio",
            "fk": "notouchLocationDiarrheaEffect",
            "question": "腹泻严重程度?",
            "rule":RegExp.NULL,
            "options": [
                {"label": "轻微或一过性，3～4次/天，粪便性状异常，或轻微腹泻持续小于1周", "value": 1},
                {"label": "中度或持续性，5～7次/天，粪便性状异常，或腹泻＞1周", "value": 2},
                {"label": "＞7次/天，粪便性状异常，或出血性腹泻，直立性低血压，电解质失衡，需静脉输液＞2L", "value": 3},
                {"label": "低血压休克，需住院治疗", "value": 4}
            ]
        },
        {
            "no": "15",
            "type": "radio",
            "fk": "haveNotouchLocationAnorexiaReaction",
            "question": "是否有厌食?",
            "rule":RegExp.NULL,
            "subAmount":1,
            "options": [
                {"label": "否", "value": 1},
                {"label": "是", "value": 2}
            ]
        },
        {
            "no": "15-1",
            "type": "radio",
            "fk": "notouchLocationAnorexiaEffect",
            "question": "厌食严重程度?",
            "rule":RegExp.NULL,
            "options": [
                {"label": "食欲下降，但不减少食物摄入", "value": 1},
                {"label": "食欲下降，食物摄入减少，但体重未明显降低", "value": 2},
                {"label": "食欲下降，且体重明显降低", "value": 3},
                {"label": "需要措施干预(如胃管喂食、肠外营养)", "value": 4}
            ]
        },
        {
            "no": "16",
            "type": "radio",
            "fk": "haveNotouchLocationVomitReaction",
            "question": "是否呕吐?",
            "rule":RegExp.NULL,
            "subAmount":1,
            "options": [
                {"label": "否", "value": 1},
                {"label": "是", "value": 2}
            ]
        },
        {
            "no": "16-1",
            "type": "radio",
            "fk": "notouchLocationVomitEffect",
            "question": "呕吐严重程度?",
            "rule":RegExp.NULL,
            "options": [
                {"label": "1~2次/24小时且不影响活动", "value": 1},
                {"label": "3～5次/24小时或活动受限", "value": 2},
                {"label": "24小时内＞6次或需要静脉补液", "value": 3},
                {"label": "由于低血压休克需要住院或其他途径营养", "value": 4}
            ]
        },
        {
            "no": "17",
            "type": "radio",
            "fk": "haveNotouchLocationNauseaReaction",
            "question": "是否恶心?",
            "rule":RegExp.NULL,
            "subAmount":1,
            "options": [
                {"label": "否", "value": 1},
                {"label": "是", "value": 2}
            ]
        },
        {
            "no": "17-1",
            "type": "radio",
            "fk": "notouchLocationNauseaEffect",
            "question": "恶心影响?",
            "rule":RegExp.NULL,
            "options": [
                {"label": "一过性(＜24小时)或间歇性且摄入食物基本正常", "value": 1},
                {"label": "持续的恶心导致食物摄入减少(24～48小时)", "value": 2},
                {"label": "持续的恶心导致几乎无食物摄入(＞48小时)或需要静脉补液", "value": 3},
                {"label": "威胁生命(如低血压休克)", "value": 4}
            ]
        },
        {
            "no": "18",
            "type": "radio",
            "fk": "haveNotouchLocationMusclePainReaction",
            "question": "是否有肌肉痛(非接种部位)?",
            "rule":RegExp.NULL,
            "subAmount":1,
            "options": [
                {"label": "否", "value": 1},
                {"label": "是", "value": 2}
            ]
        },
        {
            "no": "18-1",
            "type": "radio",
            "fk": "notouchLocationMusclePainEffect",
            "question": "疼痛严重程度?",
            "rule":RegExp.NULL,
            "options": [
                {"label": "不影响日常活动", "value": 1},
                {"label": "轻微影响日常活动", "value": 2},
                {"label": "重度肌肉疼痛，严重影响日常活动", "value": 3},
                {"label": "急诊或住院", "value": 4}
            ]
        },
        {
            "no": "19",
            "type": "radio",
            "fk": "haveNotouchLocationHeadacheReaction",
            "question": "是否有头痛?",
            "rule":RegExp.NULL,
            "subAmount":1,
            "options": [
                {"label": "否", "value": 1},
                {"label": "是", "value": 2}
            ]
        },
        {
            "no": "19-1",
            "type": "radio",
            "fk": "notouchLocationHeadacheEffect",
            "question": "头疼严重程度?",
            "rule":RegExp.NULL,
            "options": [
                {"label": "不影响活动，无需治疗", "value": 1},
                {"label": "一过性，轻微影响日常活动，可能需治疗或干预", "value": 2},
                {"label": "严重影响日常活动，需要治疗或干预", "value": 3},
                {"label": "顽固性，需急诊或住院", "value": 4}
            ]
        },
        {
            "no": "20",
            "type": "radio",
            "fk": "haveNotouchLocationCoughReaction",
            "question": "是否有咳嗽?",
            "rule":RegExp.NULL,
            "subAmount":1,
            "options": [
                {"label": "否", "value": 1},
                {"label": "是", "value": 2}
            ]
        },
        {
            "no": "20-1",
            "type": "radio",
            "fk": "notouchLocationCoughEffect",
            "question": "咳嗽严重程度?",
            "rule":RegExp.NULL,
            "options": [
                {"label": "一过性，无需治疗", "value": 1},
                {"label": "持续咳嗽，治疗有效", "value": 2},
                {"label": "阵发咳嗽，治疗无法控制", "value": 3},
                {"label": "急诊或住院", "value": 4}
            ]
        },
        {
            "no": "21",
            "type": "radio",
            "fk": "haveNotouchLocationTiredReaction",
            "question": "是否有疲劳、乏力?",
            "rule":RegExp.NULL,
            "subAmount":1,
            "options": [
                {"label": "否", "value": 1},
                {"label": "是", "value": 2}
            ]
        },
        {
            "no": "21-1",
            "type": "radio",
            "fk": "notouchLocationTiredEffect",
            "question": "疲劳、乏力严重程度?",
            "rule":RegExp.NULL,
            "options": [
                {"label": "正常活动减弱＜48小时，不影响活动", "value": 1},
                {"label": "正常活动减弱20%～50%＞48 小时，稍影响活动", "value": 2},
                {"label": "正常活动减弱＞50%，严重影响日常活动，不能工作", "value": 3},
                {"label": "不能自理，急诊或住院", "value": 4}
            ]
        },
        {
            "no": "22",
            "type": "radio",
            "fk": "haveOtherReaction",
            "question": "除以上列出不适外，是否有其他不适或临床事件？",
            "rule":RegExp.NULL,
            "subAmount":2,
            "options": [
                {"label": "否", "value": 1},
                {"label": "是", "value": 2}
            ]
        },
        {
            "no": "22-1",
            "type": "text",
            "fk": "otherReactionDetail",
            "question": "具体症状描述",
            "rule":RegExp.NULL,
        },
        {
            "no": "21-2",
            "type": "radio",
            "fk": "otherReactionEffect",
            "question": "选择严重程度?",
            "rule":RegExp.NULL,
            "options": [
                {"label": "轻度：短时（＜48h）或轻微不适，不影响活动，无需治疗", "value": 1},
                {"label": "中度：轻度或中度活动受限，可能需就诊、不需或仅需轻度治疗 ", "value": 2},
                {"label": "重度：活动明显 受限，需就诊并接受治疗，可能需要住院", "value": 3},
                {"label": "危重：可能威胁生命，活动严重受限，需监护治疗", "value": 4}
            ]
        },
    ]
