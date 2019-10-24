export default {
	Page:{
		scrollTo:0
	},
	Modal:{
		visible:false,
		addproject_one: {visible:false},
		addproject_two: {visible:false},
		addproject_three: {visible:false}
	},
	BigModal:{
		visible: false,
		showportfolio: {visible:false, data:""}
	},
	Menubook:{
		visible:true
	},
	Acheivements:{
		add_visible:false
	},
	Careers:{
		add_visible:false
	},
	Templates:[
		{
			title: "기본 양식",
			description: "기본 양식 설명입니다.",
			thumbnail: "/assets/template.jpg"
		},
		{
			title: "기본 양식2",
			description: "기본 양식2 설명입니다.",
			thumbnail: "/assets/template.jpg"
		}
	],
	User:{
		title: "빈 포트폴리오",
		logined: false,
		image: "",
		introduce: "자기소개서",
		profile:{
			name: ' - ',
			birth: ' - ',
			email: '- ',
			github: ' - '
		},
		acheivements:[
			'수상 내역등을 입력해주세요.'
		],
		careers:[
			'경력을 입력해주세요'
		],
		skills:{
			used_languages:[
				{
					title:"",
					value:"",
					used:0
				}
			],
			used_frameworks:[
				{
					title:"",
					version:""
				}
			],
			used_tools:[
				""
			]
		}
	},
	EmptyUser:{
		title: "빈 포트폴리오",
		logined: false,
		image: "",
		introduce: "자기소개서",
		profile:{
			name: ' - ',
			birth: ' - ',
			email: '- ',
			github: ' - '
		},
		acheivements:[
			'수상 내역등을 입력해주세요.'
		],
		careers:[
			'경력을 입력해주세요'
		],
		skills:{
			used_languages:[
				{
					title:"",
					value:"",
					used:0
				}
			],
			used_frameworks:[
				{
					title:"",
					version:""
				}
			],
			used_tools:[
				""
			]
		}
	},
	Projects:[
		
	],
	account: "",
	project: "",
	Githubs:[
		{
			id: "zkdlu",
			repositories: [
				{
					title:"Project1",
					used_languages:[
						{
							"title":"C",
							"value":"c",
							"used":150
						}
					],
					quality:{
						dry:10,
						coupling:9,
						cohension:9,
						standard:10,
						complexity:9
					}
				},
				{
					title:"Project2",
					used_languages:[
						{
							"title":"C++",
							"value":"cpp",
							"used":150
						}
					],
					quality:{
						dry:10,
						coupling:1,
						cohension:9,
						standard:10,
						complexity:1
					}
				},
				{
					title:"Project3",
					used_languages:[
						{
							"title":"C#",
							"value":"csharp",
							"used":150
						}
					],
					quality:{
						dry:10,
						coupling:10,
						cohension:9,
						standard:10,
						complexity:9
					}
				}
			]
		},
		{
			id: "s0metimes",
			repositories: [
				{
					title:"SH 1",
					used_languages:[
						{
							"title":"C",
							"value":"c",
							"used":150
						}
					],
					quality:{
						dry:1,
						coupling:9,
						cohension:9,
						standard:10,
						complexity:1
					}
				},
				{
					title:"SH 2",
					used_languages:[
						{
							"title":"C++",
							"value":"cpp",
							"used":150
						}
					],
					quality:{
						dry:1,
						coupling:1,
						cohension:9,
						standard:10,
						complexity:10
					}
				},
				{
					title:"Sohang",
					used_languages:[
						{
							"title":"C#",
							"value":"csharp",
							"used":150
						}
					],
					quality:{
						dry:10,
						coupling:10,
						cohension:9,
						standard:10,
						complexity:9
					}
				}
			]
		},
	],
	selected_languages:[],
	PortFolioes:[
		{
			User:{
				title: "오시환의 포트폴리오",
				image: "/assets/1.jpg",
				introduce: "그런 날이 있어 갑자기 혼자인 것만 같은 날 어딜 가도 내 자리가 아닌 것만 같고 고갠 떨궈지는 날 그럴 때마다 언제나 내가 소중한지 말 해주는 너의 그 한마디에 Everything's alright 초라한 nobody에서 다시 somebody 특별한 나로 변해 You make me feel special 세상이 아무리 날 주저앉혀도 아프고 아픈 말들이 날 찔러도 네가 있어 난 다시 웃어 That's what you do",
				profile:{
					name: '오시환',
					birth: '1995.08.26',
					email: 'tghks905@gmail.com',
					github: 'github.com/s0metimes'
				},
				acheivements:[
					'2019 국방 스타트업 챌린지 육군참모총장상'
				],
				careers:[
					'2015.03 ~ 2017.06 한양대학교 3학년 재학',
					'2016.12 ~ 2017.02 (주)Widevantage 인턴으로 핸드폰 센서 측정 앱 개발',
					'2017.09 ~ 2018.03 (주)옵티마이즈 CTO 로 서비스의 초기 웹서버 개발 및 기획 참여'
				],
				skills:{
					used_languages:[
						{
							title:"C",
							value:"c",
							used:10
						},
						{
							title:"Java",
							value:"java",
							used:32
						},
						{
							title:"C#",
							value:"csharp",
							used:5
						},
						{
							"title":"Js",
							"value":"jjavascript",
							"used":50
						}
					],
					used_frameworks:[
						{
							title:"express",
							version:"3.0"
						},
						{
							title:".net framework",
							version:"4.8"
						},
						{
							title:"spring",
							version:"3.0"
						}
					],
					used_tools:[
						"visual studio IDE",
						"visual studio code",
						"webstorm",
						"notepad++",
						"eclipse"
					]
				}
			},
			Projects:[
				{
					title: "OSAM2019",
					thumbnail: "사진",
					summary: "확인",
					skills: "ㅇㅇ",
					learned: "vue.js 배웠습니다.",
					used_languages:[
						{
							title:"C",
							used:10
						},
						{
							title:"C#",
							used:5
						}
					],
					quality:{
						dry:8,
						coupling:9,
						cohension:6,
						standard:8,
						complexity:5
					}
				},
				{
					title: "Playground for Node JS",
					thumbnail: "사진2",
					summary: "테스트",
					skills: "ㅇㅇ",
					learned: "12시 전에 자고 싶습니다.",
					used_languages:[
						{
							title:"Java",
							used:32
						},
						{
							title:"Js",
							used:50
						}
					],
					quality:{
						dry:10,
						coupling:9,
						cohension:9,
						standard:10,
						complexity:9
					}
				}
			]
		},
		{
			User:{
				title: "건꺼임ㄹ",
				image: "/assets/2.jpg",
				introduce: "배탈난거같습니다.",
				profile:{
					name: '이건',
					birth: '1997.01.28',
					email: 'zkdlu159951@gmail.com',
					github: 'github.com/zkdlu'
				},
				acheivements:[
					'배아파요.'
				],
				careers:[
					'아이스크림을 ',
					'많이 먹어서',
					'배탈 난거 같아요.'
				],
				skills:{
					used_languages:[
						{
							title:"C",
							value:"c",
							used:150
						},
						{
							title:"Java",
							value:"java",
							used:200
						},
						{
							title:"C#",
							value:"csharp",
							used:250
						},
						{
							title:"C++",
							value:"cpp",
							used:200
						}
					],
					used_frameworks:[
						{
							title:"express",
							version:"3.0"
						},
						{
							title:".net framework",
							version:"4.8"
						},
						{
							title:"spring",
							version:"3.0"
						}
					],
					used_tools:[
						"visual studio IDE",
						"visual studio code",
						"webstorm",
						"notepad++",
						"eclipse"
					]
				}
			},
			Projects:[
				{
					title: "Fancy",
					thumbnail: "사진",
					summary: "지금 하늘 구름색은 트로피컬 yeah 저 태양 빨간 빛 니 두볼 같에 oh tell me i'm the only one baby i fancy you i fancy you fancy tou twice! it's dangerous 따금해 넌 장미같아 괜찮아 조금도 난 겁나지 않아 ",
					skills: "Fancy~ you 누가 먼저 좋아하면 어때 Fancy you 지금 너에게로 갈래 Fancy ooh~",
					learned: "vue.js 배웠습니다.",
					used_languages:[
						{
							title:"C",
							used:150
						},
						{
							title:"C#",
							used:250
						}
					],
					quality:{
						dry:8,
						coupling:6,
						cohension:6,
						standard:9,
						complexity:5
					}
				},
				{
					title: "GET LOUD",
					thumbnail: "사진2",
					summary: "발밑에 보인 그 선 앞 굳이 넘겠단 말 너무 위험한 장난 그만 큰일 나 내 눈엔 절벽 끝인데 한 걸음 때면 넌 너무 아슬한 상황 정말 큰일 나 화려하게 포장이 된 거짓말 관심받고 싶었나 봐 쉽게 써 내려간 너의 거친 말 눈길조차 아깝잖아",
					skills: "위태롭게 세워가 너의 도미노 많은 시선이 모여 너의 등 뒤로 한 번쯤은 돌아봐 잘못된 길로 결국 너 혼자 남아 긿은 미로 길을 잃어 발밑에 보인 그 선 앞 굳이 넘겠단 말",
					learned: "12시 전에 자고 싶습니다.",
					used_languages:[
						{
							title:"Java",
							used:200
						},
						{
							title:"C++",
							used:200
						}
					],
					quality:{
						dry:2,
						coupling:3,
						cohension:0,
						standard:5,
						complexity:5
					}
				}
			]
		}
	]
};