'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });









// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-select-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables (optional - form may not exist)
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field (only if form exists)
if (form && formBtn) {
  for (let i = 0; i < formInputs.length; i++) {
    formInputs[i].addEventListener("input", function () {

      // check form validation
      if (form.checkValidity()) {
        formBtn.removeAttribute("disabled");
      } else {
        formBtn.setAttribute("disabled", "");
      }

    });
  }
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}



// Project Modal Data
const projectData = {
  roguelike: {
    title: "Undead Survivor: Farmer's Fury",
    tagline: "빠른 반복으로 검증한 로그라이트 시스템 설계",
    modalImage: "./assets/images/modal-roguelike.png",
    info: {
      platform: "PC",
      engine: "Unity, C#",
      role: "시스템 기획 & 개발",
      team: "1인",
      period: "2025.12 (6일)",
      note: "개인 프로젝트"
    },
    overview: "로그라이트 장르의 성장 시스템을 분석하고, 3경로 성장 구조를 설계한 프로젝트입니다. 기획, 구현, 테스트, 밸런싱을 반복하며 시스템 설계 의도를 플레이 테스트로 검증했습니다.",
    concept: [
      "<strong>3중 성장 구조</strong> (레벨업 + 상점 + 클리어 보상) 설계 및 구현",
      "<strong>50건 이상의 테스트 기록</strong>을 바탕으로 밸런스 조정",
      "<strong>경제 밸런싱</strong>: 웨이브 1-9 총 보상 5,490G / 스탯 만렙 비용 5,457G 균형 달성"
    ],
    target: {
      who: "로그라이트 게임을 즐기고, 반복 플레이를 통한 점진적 성장을 좋아하는 플레이어",
      what: [
        "3중 성장 구조(레벨업/상점/클리어 보상)를 활용한 전략적 빌드 구성의 재미",
        "4종 무기(삽/화염/얼음/번개)의 차별화된 플레이 스타일 선택",
        "반복 플레이를 통해 상점 업그레이드로 더 강해지는 성장의 재미",
        "보스전에서 레이저 패턴을 회피하며 긴장감 있는 전투를 즐기는 재미"
      ],
      how: "로그라이트 + 3경로 성장 + 다양한 무기 = 전략적 반복 플레이 게임"
    },
    systems: [
      {
        title: "레벨업 시스템",
        why: "상점/클리어 보상에 투자하지 않아도 게임이 막히지 않도록 '저점 보장' 안전장치 제공",
        how: "적 처치 → 경험치 획득 → 레벨업 시 자동으로 기본 스탯(공격력/체력) 상승",
        what: "플레이어가 클리어 보상으로 스탯을 고르지 않아도 게임 진행 가능. 상점/클리어 보상 시스템과 함께 3경로 성장 구조 완성"
      },
      {
        title: "상점 시스템",
        why: "플레이어가 원하는 방향으로 스탯을 특화하고, 전략적 선택을 할 수 있도록 하기 위함",
        how: "4종 스탯 (공격력/체력/이동속도/방어력) + 보유 골드 업그레이드. 레벨당 1.35배 비용 증가, 플레이마다 초기화",
        what: "웨이브 클리어 후 상점에서 골드로 스탯 업그레이드 구매. 1개 스탯 MAX 비용 5,457G로, 한정된 골드 내에서 전략적 선택 유도"
      },
      {
        title: "보상 시스템",
        why: "플레이어에게 즉각적 성장(레벨업)과 장기 성장(골드) 두 가지 목표를 제공하기 위함",
        how: "웨이브 클리어 시 골드 보상 + 클리어 보상 이원화. 웨이브별 골드 보상량을 엑셀로 설계하여 경제 균형 달성",
        what: "웨이브 1-9 클리어 시 총 5,490G 획득. 1개 스탯 MAX 비용 5,457G로 설계하여 '1개 스탯 집중 특화' 또는 '여러 스탯 분산 투자' 선택 유도"
      },
      {
        title: "특수 무기 시스템",
        why: "플레이어가 다양한 플레이 스타일을 경험하고, 각 무기의 차별화된 재미를 느낄 수 있도록 하기 위함",
        how: "4종 무기 (삽/화염/얼음/번개) 설계. 데미지를 낮추고 부가효과로 역할 차별화",
        what: "삽: 순수 데미지 특화 / 화염: 화상 (1 DPS × 3초) / 얼음: 슬로우 (10% × 2초) / 번개: 체인 (50% dmg, 반경 2). 선택 분포 균등화로 빌드 다양성 확보"
      },
      {
        title: "보스 시스템",
        why: "일반 웨이브와 차별화된 긴장감과 성취감을 제공하기 위함",
        how: "레이저 패턴 + 페이즈 전환 설계. 보스 체력 50% 이하 시 패턴 변경 및 난이도 상승",
        what: "보스 등장 시 전용 BGM 재생, 레이저 공격 패턴 회피 요구, 페이즈 전환 시 공격 속도 증가로 긴장감 극대화"
      }
    ],
    videos: [
      { title: "플레이 영상", url: "https://youtu.be/EjU2IHN1v2o" }
    ],
    externalLinks: [
      {
        title: "밸런싱 기록 (Notion)",
        url: "https://www.notion.so/Undead-Survivor-Farmer-s-Fury-2dc4ed5c19e88050806aee46f8201c47",
        icon: "document-text-outline"
      },
      {
        title: "기획서 다운로드",
        url: "./assets/docs/UndeadSurvivor_기획서_박진.xlsx",
        icon: "download-outline",
        isDownload: true
      }
    ]
  },

  babysanta: {
    title: "Baby Santa Run",
    tagline: "흩어진 선물을 찾아라! 크리스마스를 지키기 위해 달리는 캐주얼 러닝 게임!",
    modalImage: "./assets/images/modal-babysanta.png",
    info: {
      platform: "모바일, PC",
      engine: "언리얼 엔진 5",
      role: "웹툰 시놉시스 기획 & 데모 게임 기획 & 개발",
      team: "4인",
      period: "2024.11.01 ~ 2024.12.19",
      note: "NCA 장기과정 1학기 | 웹툰 IP 기반 캐주얼 게임"
    },
    overview: "러닝 액션 게임 장르를 참고해 기획, 제작하였습니다. 점프를 통해 맵에 배치되어 있는 선물을 모으고, 목표 지점까지 달리는 게임입니다.",
    concept: [
      "웹툰 IP 기반의 <strong>서사와 게임 플레이 경험을 연결</strong>하는 구조를 지향",
      "웹툰 감상 후 플레이 상황 고려, <strong>피로도가 적은 캐주얼 게임</strong>으로 기획"
    ],
    target: {
      who: "캐주얼 스마트폰 게임과 웹툰을 즐기는 사용자",
      what: ["웹툰 IP의 톤앤매너를 살린 맵을 감상하며 달리는 재미", "최고 점수를 위해 숨겨진 선물 상자를 찾고 맵을 탐험하는 재미"],
      how: "웹툰 + 캐주얼 + 러닝 = 웹툰 IP 기반 캐주얼 러닝 게임"
    },
    systems: [
      {
        title: "플레이어 조작 시스템",
        why: "'짧은 시간 안에 간편하게 즐길 수 있는 게임'을 지향, 단순 조작만으로 플레이할 수 있도록 하기 위함",
        how: "PC의 기본 상태 값을 '달리고 있는 상태'로 두고, 방향 조정과 점프로만 조작",
        what: "PC - W,A,S,D + 점프(SPACE) / 모바일 - 모바일 패드 + 우측 점프 버튼"
      },
      {
        title: "선물 상자 획득 시스템",
        why: "현재 플레이어가 획득한 선물의 수량을 직관적으로 표기하기 위함",
        how: "화면의 우측 상단, 선물 상자 그림 배치. 그림 옆에 획득 수량을 표기",
        what: "'Destroy Actor' 블루프린트를 활용해 PC에 접촉하는 즉시 선물상자 오브젝트 제거"
      },
      {
        title: "TP(Teleport Point) 리스폰 시스템",
        why: "플레이어가 맵 밖으로 이탈했을 경우, 맵으로 복귀시키기 위함",
        how: "트리거 박스를 바깥 맵의 바닥면에 배치하고, PC가 닿았을 때 가장 가까운 지점으로 이동",
        what: "맵을 50% 이상 진행한 상태에서도 피로감 없이 가까운 TP로 즉시 이동"
      }
    ],
    videos: [
      { title: "플레이 영상", url: "https://youtube.com/watch?v=-E7Dl32FcRI" }
    ]
  },

  maeil: {
    title: "매일 보관함",
    tagline: "잃어버린 일상의 색을 찾아, 세상을 되돌리는 몰입형 VR 힐링 게임.",
    modalImage: "./assets/images/modal-maeil.png",
    info: {
      platform: "PC, Meta Quest 3",
      engine: "언리얼 엔진 5",
      role: "기획 & 사운드 디자인 & 서브 PM",
      team: "6인 (기획 2인 + 개발 3인 + 아트 1인)",
      period: "2025.03.17 ~ 2025.08.20",
      note: "NCA 장기과정 2기 쇼케이스 전시"
    },
    overview: "인터랙티브 무비 형식을 참고해 기획된 몰입형 VR 게임입니다. 플레이어는 색을 잃은 세상을 탐색하며, 상호작용을 통해 세상의 색을 되찾습니다.",
    concept: [
      "VR을 처음 접하는 사용자도 따라갈 수 있도록 <strong>직관적 상호작용 구조</strong>로 설계",
      "상호작용 중심의 진행 설계로, 단순 감상이 아닌 <strong>'주체적 플레이 경험'으로 확장되는 게임</strong>을 지향",
      "<strong>개인화된 플레이 경험</strong>을 위해 플레이어의 사진을 활용한 시스템을 기획"
    ],
    target: {
      who: "반복되는 일상 속에서 무기력함을 느끼는 사람",
      what: ["플레이어의 사진이 게임 속에 반영되는 재미", "색을 되찾는 순간, 2D 세상이 3D 세상으로 변화하는 시각적 재미", "플레이어가 주체적으로 이야기를 진행하는 재미"],
      why: "대부분의 감정이나 일상의 소중함을 다루는 콘텐츠는 '보는 콘텐츠'. 게임으로 제작해 '플레이어의 행동이 트리거'가 되는 진행 설계 구조로 몰입감 향상",
      how: "VR + 인터랙티브 무비 + 게임 = 몰입형 VR 힐링 게임"
    },
    systems: [
      {
        title: "텔레포트 이동 시스템",
        why: "VR 공간을 돌아다니며 상호작용을 할 수 있도록 하기 위함",
        how: "컨트롤러 조작은 멀미 유발, 직접 이동은 공간 제한 문제 → 텔레포트 이동 채택",
        what: "메인 이동 조작은 텔레포트로, 2m*2m 이내의 거리는 직접 이동 가능"
      },
      {
        title: "상호작용 강조 시스템",
        why: "VR 환경에서 상호작용 가능한 오브젝트를 파악하기 어려움",
        how: "상호작용 가능한 오브젝트에 굵은 윤곽선 활성화, 그랩 시 연계 대상 오브젝트 강조",
        what: "직관적 시각 피드백으로 플레이어가 '오브젝트의 사용처'를 자연스럽게 이해"
      },
      {
        title: "버스 카드 퍼즐 시스템",
        why: "플레이어가 게임을 진행하는 '주체'라는 경험을 제공하기 위함",
        how: "버스 카드 조각을 시야 높이로, 버스 표지판과 최대한 근접하게 배치",
        what: "트리거 박스 크기 확대, 버스 카드가 닿으면 자동으로 퍼즐 채워짐"
      },
      {
        title: "사진 업로드 & 입체화 시스템",
        why: "플레이어가 '이야기의 주체'로 참여하는 경험, 엔딩에서 '세상이 색을 되찾았다'는 감각 극대화",
        how: "AI를 통해 뎁스 분석 후 레이어를 3단계(전경/중경/배경)로 고정",
        what: "플레이어가 업로드한 사진이 입체 홀로그램 카드처럼 변환되어 게임 속에 반영"
      }
    ],
    teamwork: [
      {
        title: "상호작용 기획 추가",
        problem: "\"상호작용이 적고 보는 것 위주라 VR 장점이 없다\"는 피드백",
        solution: "VR 레퍼런스 분석 → 상호작용 5개 기획 및 제안 (버스카드 퍼즐, 창문 낙서, 버스 태그, 사진 업로드, 사진 감상)",
        result: "제안한 5개 전체 채택, \"보는 VR\" → \"참여하는 VR\"로 전환"
      },
      {
        title: "기획-아트 리소스 조율",
        problem: "기획(맵 7개) vs 아트(일정상 불가) 충돌. 원 기획 플레이 타임 20분 초과, 목표는 10분",
        solution: "플레이 타임 기준으로 논의 재구성 + 설득 논리 4가지 제시 (전시 회전율, NPC 구현 리스크, 리소스 과중, 연출 대안 존재)",
        result: "맵 7개 → 5개, NPC 제거 합의. 최종 플레이 타임 8~9분"
      },
      {
        title: "기술 제약 대응",
        problem: "XR→VR 전환 연출이 Meta Quest에서 구현 불가. 기획팀 \"핵심 경험이 깨진다\" 주장으로 프로젝트 정체",
        solution: "기획 의도 재정의 + 대안 제시. 본질: \"변화를 직접 체험하는 감각\", 대안: 2D→3D 전환 연출",
        result: "기획팀 설득 성공, 2D→3D 연출로 합의 및 구현 완료"
      }
    ],
    videos: [
      { title: "홍보 영상", url: "https://youtu.be/33t4nJNPiZc" },
      { title: "플레이 영상", url: "https://youtube.com/watch?v=R3hcZM-BfmQ" }
    ]
  },

  kanji: {
    title: "한자 낱말 퀴즈",
    tagline: "AI 기획-구현 싸이클 1단계: 기본 게임 루프 설계",
    modalImage: "./assets/images/modal-kanji.png",
    info: {
      platform: "PC, 모바일",
      engine: "Claude Code, Cursor",
      role: "기획 & AI 활용 개발",
      team: "1인",
      period: "2025.07.02 ~ 2025.07.10",
      note: "AI 프로토타이핑 학습 [1/3]"
    },
    overview: "로그라이트 프로젝트 착수 전, AI 도구를 활용한 기획-구현 흐름을 검증하기 위해 시작한 첫 번째 프로젝트입니다. 가장 단순한 게임 루프(입력→판정→피드백)를 설계하고 구현했습니다.",
    concept: [
      "AI 도구(Claude Code)로 기획부터 구현까지 직접 진행한 <strong>첫 프로젝트</strong>",
      "가장 단순한 게임 루프인 <strong>'입력→판정→피드백'</strong> 구조 설계",
      "이후 로그라이트의 카드 선택 시스템을 설계할 때 기반이 됨"
    ],
    systems: [
      {
        title: "퀴즈 루프 시스템",
        why: "가장 단순한 형태의 게임 루프를 설계하고 구현해보기 위함",
        how: "문제 출제 → 4지선다 입력 → 정답 판정 → 결과 피드백 → 다음 문제",
        what: "정답/오답에 따른 즉각적 피드백, 연속 정답 시 콤보 보너스"
      }
    ],
    externalLinks: [
      {
        title: "게임 플레이",
        url: "./assets/webgame/kanji-quiz.html",
        icon: "game-controller-outline"
      }
    ]
  },

  apple: {
    title: "사과 수확 게임",
    tagline: "AI 기획-구현 싸이클 2단계: 숫자 퍼즐과 콤보 시스템",
    modalImage: "./assets/images/modal-apple.png",
    info: {
      platform: "PC, 모바일",
      engine: "Claude Code, Cursor",
      role: "기획 & AI 활용 개발",
      team: "1인",
      period: "2025.08.11 ~ 2025.08.14",
      note: "AI 프로토타이핑 학습 [2/3]"
    },
    overview: "퀴즈 게임에서 한 단계 나아가, 숫자 조합 퍼즐과 콤보 시스템을 경험한 프로젝트입니다. '합이 10이 되는 조합 찾기'라는 규칙 위에 시간 제한과 콤보 보너스를 설계했습니다.",
    concept: [
      "퀴즈에서 한 단계 나아가, <strong>숫자 조합 퍼즐</strong>을 다뤄본 프로젝트",
      "2분 제한 시간 + 콤보 보너스로 <strong>긴장감과 보상</strong> 설계",
      "연속 성공 시 콤보 보너스, 힌트 시스템으로 <strong>유저 경험</strong> 개선"
    ],
    systems: [
      {
        title: "숫자 조합 퍼즐 시스템",
        why: "단순 입력을 넘어 '조합 탐색' 요소가 있는 게임 루프 경험을 쌓기 위함",
        how: "15x15 그리드에서 가로/세로로 연결해 합이 10이 되면 수확. 2분 제한",
        what: "콤보 시스템(연속 성공 시 보너스), 힌트 시스템(일정 시간 후 자동 표시)으로 유저 경험 설계"
      }
    ],
    externalLinks: [
      {
        title: "게임 플레이",
        url: "./assets/webgame/apple-harvest.html",
        icon: "game-controller-outline"
      }
    ]
  },

  puzzle: {
    title: "슬라이드 퍼즐 게임",
    tagline: "AI 기획-구현 싸이클 3단계: 문제 해결 프로세스 경험",
    modalImage: "./assets/images/modal-puzzle.png",
    info: {
      platform: "PC, 모바일",
      engine: "Claude Code, Cursor",
      role: "기획 & AI 활용 개발",
      team: "1인",
      period: "2025.10.03 ~ 2025.10.06",
      note: "AI 프로토타이핑 학습 [3/3]"
    },
    overview: "AI 프로토타이핑 학습의 마지막 단계로, '문제 발생 → 원인 분석 → 시스템적 해결' 프로세스를 경험한 프로젝트입니다. 랜덤 생성 시 해결 불가능한 퍼즐이 나오는 문제를 역생성 알고리즘으로 해결했습니다.",
    concept: [
      "랜덤 생성 시 <strong>'풀 수 없는 퍼즐'</strong>이 나오는 문제에 직면",
      "원인 분석 후 <strong>역생성 알고리즘</strong>으로 해결 — 완성 상태에서 역으로 섞어 항상 해결 가능 보장",
      "'의도대로 작동하는지 검증'하는 습관이 로그라이트 50건 테스트 기록으로 이어짐"
    ],
    systems: [
      {
        title: "역생성 알고리즘",
        why: "랜덤 셔플 시 50% 확률로 해결 불가능한 퍼즐이 생성되는 문제 해결",
        how: "완성 상태에서 시작 → 유효한 이동만 역으로 수행 → 항상 해결 가능 보장",
        what: "난이도별 역이동 횟수 설정 (Easy: 20회, Normal: 50회, Hard: 100회)"
      }
    ],
    externalLinks: [
      {
        title: "게임 플레이",
        url: "./assets/webgame/slide-puzzle-game.html",
        icon: "game-controller-outline"
      }
    ]
  },

  novel: {
    title: "웹소설 연재(완결)",
    tagline: "노벨피아 연재 완결 웹소설",
    modalImage: "./assets/images/modal-novel.png",
    info: {
      platform: "노벨피아",
      engine: "-",
      role: "작가",
      team: "1인",
      period: "2024.10.01 ~ 2025.03.31",
      note: "총 126화 (에필로그, 프롤로그 포함)"
    },
    overview: "노벨피아 플랫폼에서 연재하여 완결한 웹소설입니다. 총 126화 분량으로 약 6개월간 연재되었습니다.",
    concept: [
      "<strong>6개월간 126화 완결</strong> — 장기 프로젝트 완주 경험",
      "주 5회 연재 일정 준수, <strong>마감 관리 능력</strong> 증명"
    ],
    systems: [],
    externalLink: {
      title: "노벨피아에서 보기",
      url: "https://novelpia.com/novel/308225"
    }
  }
};


// YouTube ID Extractor
function getYouTubeId(url) {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
}


// Project Modal Functions
const projectModal = document.querySelector("[data-project-modal]");
const modalOverlay = document.querySelector("[data-modal-overlay]");
const modalCloseBtn = document.querySelector("[data-modal-close]");
const modalBody = document.querySelector("[data-modal-body]");
const projectBtns = document.querySelectorAll("[data-project-btn]");

// Generate modal content HTML
function generateModalContent(project) {
  let systemsHTML = '';
  if (project.systems && project.systems.length > 0) {
    systemsHTML = `
      <div class="modal-section modal-systems">
        <h3 class="modal-section-title">핵심 시스템 (2W1H)</h3>
        ${project.systems.map((system, index) => `
          <details class="system-episode">
            <summary class="system-summary">
              <span class="system-episode-num">System ${index + 1}</span>
              <span class="system-episode-title">${system.title}</span>
              <span class="system-toggle-icon"></span>
            </summary>
            <div class="system-content">
              <div class="system-step">
                <span class="system-label">Why</span>
                <p class="system-text">${system.why}</p>
              </div>
              <div class="system-step">
                <span class="system-label">How</span>
                <p class="system-text">${system.how}</p>
              </div>
              <div class="system-step">
                <span class="system-label">What</span>
                <p class="system-text">${system.what}</p>
              </div>
            </div>
          </details>
        `).join('')}
      </div>
    `;
  }

  let teamworkHTML = '';
  if (project.teamwork && project.teamwork.length > 0) {
    teamworkHTML = `
      <div class="modal-section modal-teamwork">
        <h3 class="modal-section-title">팀 협업 사례</h3>
        ${project.teamwork.map((episode, index) => `
          <details class="teamwork-episode">
            <summary class="teamwork-summary">
              <span class="teamwork-episode-num">Episode ${index + 1}</span>
              <span class="teamwork-episode-title">${episode.title}</span>
              <span class="teamwork-toggle-icon"></span>
            </summary>
            <div class="teamwork-content">
              <div class="teamwork-step">
                <span class="teamwork-label teamwork-label-problem">문제</span>
                <p class="teamwork-text">${episode.problem}</p>
              </div>
              <div class="teamwork-step">
                <span class="teamwork-label teamwork-label-solution">해결</span>
                <p class="teamwork-text">${episode.solution}</p>
              </div>
              <div class="teamwork-step">
                <span class="teamwork-label teamwork-label-result">결과</span>
                <p class="teamwork-text">${episode.result}</p>
              </div>
            </div>
          </details>
        `).join('')}
      </div>
    `;
  }

  let videosHTML = '';
  if (project.videos && project.videos.length > 0) {
    videosHTML = `
      <div class="modal-video">
        <h4 class="modal-video-title">프로젝트 영상</h4>
        ${project.videos.map(video => {
          const videoId = getYouTubeId(video.url);
          return `
            <div class="modal-video-item">
              <p class="modal-video-label">${video.title}</p>
              <div class="modal-video-embed">
                <iframe
                  src="https://www.youtube.com/embed/${videoId}?rel=0"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen>
                </iframe>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;
  }

  let externalLinkHTML = '';
  if (project.externalLink) {
    externalLinkHTML = `
      <a href="${project.externalLink.url}" target="_blank" class="modal-external-link">
        <ion-icon name="open-outline"></ion-icon>
        ${project.externalLink.title}
      </a>
    `;
  }

  // 다중 링크 지원 (externalLinks 배열)
  let externalLinksHTML = '';
  if (project.externalLinks && project.externalLinks.length > 0) {
    externalLinksHTML = `
      <div class="modal-external-links">
        ${project.externalLinks.map(link => {
          const downloadAttr = link.isDownload ? 'download' : '';
          const targetAttr = link.isDownload ? '' : 'target="_blank"';
          const icon = link.icon || 'open-outline';
          return `
            <a href="${link.url}" ${targetAttr} ${downloadAttr} class="modal-external-link">
              <ion-icon name="${icon}"></ion-icon>
              ${link.title}
            </a>
          `;
        }).join('')}
      </div>
    `;
  }

  let targetHTML = '';
  if (project.target) {
    // What이 배열인 경우 여러 항목으로 변환
    let whatItems = '';
    if (Array.isArray(project.target.what)) {
      whatItems = project.target.what.map(item => `<li>${item}</li>`).join('');
    } else {
      whatItems = `<li>${project.target.what}</li>`;
    }

    targetHTML = `
      <div class="modal-section">
        <h3 class="modal-section-title">3W 1H</h3>
        <div class="modal-3w1h">
          <div class="modal-3w1h-item">
            <h4 class="modal-3w1h-label">Who</h4>
            <ul class="modal-3w1h-list"><li>${project.target.who}</li></ul>
          </div>
          <div class="modal-3w1h-item">
            <h4 class="modal-3w1h-label">What</h4>
            <ul class="modal-3w1h-list">${whatItems}</ul>
          </div>
          ${project.target.why ? `
          <div class="modal-3w1h-item">
            <h4 class="modal-3w1h-label">Why</h4>
            <ul class="modal-3w1h-list"><li>${project.target.why}</li></ul>
          </div>` : ''}
          <div class="modal-3w1h-item">
            <h4 class="modal-3w1h-label">How</h4>
            <ul class="modal-3w1h-list"><li>${project.target.how}</li></ul>
          </div>
        </div>
      </div>
    `;
  }

  let modalImageHTML = '';
  if (project.modalImage) {
    modalImageHTML = `
      <div class="modal-image">
        <img src="${project.modalImage}" alt="${project.title}" loading="lazy">
      </div>
    `;
  }

  return `
    <div class="modal-header">
      <h2 class="modal-title">${project.title}</h2>
      <p class="modal-tagline">"${project.tagline}"</p>
    </div>

    ${modalImageHTML}

    <table class="modal-info-table">
      <tr>
        <th>플랫폼</th>
        <td>${project.info.platform}</td>
        <th>개발 환경</th>
        <td>${project.info.engine}</td>
      </tr>
      <tr>
        <th>담당 역할</th>
        <td>${project.info.role}</td>
        <th>팀 구성</th>
        <td>${project.info.team}</td>
      </tr>
      <tr>
        <th>기간</th>
        <td>${project.info.period}</td>
        <th>비고</th>
        <td>${project.info.note}</td>
      </tr>
    </table>

    <div class="modal-section">
      <h3 class="modal-section-title">게임 개요</h3>
      <p class="modal-text">${project.overview}</p>
    </div>

    <div class="modal-section">
      <h3 class="modal-section-title">컨셉 키워드</h3>
      <ul class="modal-list">
        ${project.concept.map(item => `<li>${item}</li>`).join('')}
      </ul>
    </div>

    ${targetHTML}
    ${systemsHTML}
    ${teamworkHTML}
    ${videosHTML}
    ${externalLinkHTML}
    ${externalLinksHTML}
  `;
}

// Open modal
function openProjectModal(projectId) {
  const project = projectData[projectId];
  if (project) {
    modalBody.innerHTML = generateModalContent(project);
    projectModal.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

// Close modal
function closeProjectModal() {
  // Remove all iframes to stop video playback
  const iframes = modalBody.querySelectorAll("iframe");
  iframes.forEach(iframe => iframe.remove());

  projectModal.classList.remove("active");
  document.body.style.overflow = "";
}

// Add click events to project buttons (Event Delegation for dynamic elements)
document.addEventListener("click", function (e) {
  const projectBtn = e.target.closest("[data-project-btn]");
  if (projectBtn) {
    e.preventDefault();
    const projectId = projectBtn.dataset.project;
    openProjectModal(projectId);
  }
});

// Close modal events
modalCloseBtn.addEventListener("click", closeProjectModal);
modalOverlay.addEventListener("click", closeProjectModal);

// Close modal with Escape key
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && projectModal.classList.contains("active")) {
    closeProjectModal();
  }
});



// Devlog Accordion Toggle
const devlogToggles = document.querySelectorAll("[data-devlog-toggle]");

for (let i = 0; i < devlogToggles.length; i++) {
  devlogToggles[i].addEventListener("click", function () {
    const devlogItem = this.closest(".devlog-item");

    // Close other open items (optional: remove this block to allow multiple open)
    const allDevlogItems = document.querySelectorAll(".devlog-item");
    for (let j = 0; j < allDevlogItems.length; j++) {
      if (allDevlogItems[j] !== devlogItem) {
        allDevlogItems[j].classList.remove("active");
      }
    }

    // Toggle current item
    devlogItem.classList.toggle("active");
  });
}


// Devlog Feature Video Toggle (YouTube Embed)
const featureToggles = document.querySelectorAll("[data-feature-toggle]");

for (let i = 0; i < featureToggles.length; i++) {
  featureToggles[i].addEventListener("click", function () {
    const featureItem = this.closest(".devlog-feature-item");
    const videoContainer = featureItem.querySelector(".devlog-feature-video");
    const youtubeId = videoContainer.dataset.youtube;

    // Close other open items and remove their iframes
    const allFeatureItems = document.querySelectorAll(".devlog-feature-item");
    for (let j = 0; j < allFeatureItems.length; j++) {
      if (allFeatureItems[j] !== featureItem) {
        allFeatureItems[j].classList.remove("active");
        // Remove iframe when closing
        const otherContainer = allFeatureItems[j].querySelector(".devlog-feature-video");
        if (otherContainer) {
          otherContainer.innerHTML = "";
        }
      }
    }

    // Toggle current item
    featureItem.classList.toggle("active");

    // Add or remove YouTube iframe
    if (featureItem.classList.contains("active") && youtubeId) {
      videoContainer.innerHTML = `
        <iframe
          src="https://www.youtube.com/embed/${youtubeId}?rel=0"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
        </iframe>
      `;
    } else {
      videoContainer.innerHTML = "";
    }
  });
}



