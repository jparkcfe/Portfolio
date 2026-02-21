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
    tagline: "3경로 성장 × 경제 밸런싱 — 보상과 비용의 오차 0.6%로 설계한 로그라이트",
    modalImage: "./assets/images/modal-roguelike.png",
    info: {
      platform: "PC",
      engine: "Unity, C#",
      role: "시스템 기획 & AI 바이브 코딩",
      team: "1인",
      period: "2025.12 (6일)",
      note: "개인 프로젝트"
    },
    overview: "레벨업·상점·클리어 보상의 3경로 성장 시스템을 설계하고, 보상-비용 균형이라는 기획 목표를 50건의 플레이 테스트로 달성한 로그라이트 게임입니다. AI 바이브 코딩(Claude)으로 타이틀부터 엔딩까지 6일 만에 1인 구현했습니다.",
    concept: [
      "<strong>3경로 성장 설계</strong>: 레벨업(저점 보장) / 상점(전략적 선택) / 클리어 보상(방향성 결정)으로 역할 분담",
      "<strong>경제 밸런싱</strong>: 전체 웨이브를 클리어하면 받는 골드(5,490G)와 스탯 1개를 최대로 올리는 비용(5,457G)을 거의 같게 설계 — 오차 0.6%. 1개에 집중할지 여러 개에 나눌지 고민하게 만드는 구조",
      "<strong>AI 바이브 코딩</strong>: Claude 활용, 타이틀~엔딩 전체를 6일 만에 1인 구현"
    ],
    target: {
      who: "로그라이트 게임을 즐기고, 반복 플레이를 통한 점진적 성장을 좋아하는 플레이어",
      what: [
        "3중 성장 구조(레벨업/상점/클리어 보상)를 활용한 전략적 빌드 구성의 재미",
        "4종 무기(삽/화염/얼음/번개)의 차별화된 플레이 스타일 선택",
        "반복 플레이를 통해 상점 업그레이드로 더 강해지는 성장의 재미",
        "보스전에서 돌진·탄막 패턴을 회피하며 긴장감 있는 전투를 즐기는 재미"
      ],
      how: "로그라이트 + 3경로 성장 + 다양한 무기 = 전략적 반복 플레이 게임"
    },
    systems: [
      {
        title: "레벨업 시스템",
        why: "상점이나 클리어 보상에 투자하지 못한 플레이어도 게임이 막히지 않도록 '저점 보장' 안전장치가 필요. 자동 성장이 없으면 초보자가 2~3 웨이브에서 이탈할 수 있음",
        how: "적 처치 → 경험치 획득 → 레벨업 시 기본 스탯(공격력/체력) 자동 상승. 플레이어 조작 불필요",
        what: "상점/클리어 보상 없이도 게임 진행 가능한 최소 성장선 확보. 3경로 중 '안전망' 역할 담당"
      },
      {
        title: "상점 시스템",
        why: "레벨업이 '저점 보장'이라면, 상점은 '천장 선택'. 한정된 골드로 어디에 투자할지 고민하게 만들어, 같은 웨이브를 다르게 플레이하는 리플레이 동기 부여",
        how: "4종 스탯(공격력/체력/이동속도/방어력) 업그레이드. 레벨당 1.35배 비용 증가로 올인 vs 분산의 선택 압박. 플레이마다 초기화하여 매 판 새로운 빌드 유도",
        what: "1개 스탯 MAX 비용 5,457G. 총 보상 5,490G와 맞물려 '1개 스탯 집중 특화' 또는 '여러 스탯 분산 투자' 중 선택해야 하는 구조"
      },
      {
        title: "보상 시스템",
        why: "즉각적 성장(레벨업)만으로는 전략적 깊이 부족, 장기 성장(골드)만으로는 즉각적 쾌감 부족. 두 보상을 이원화하여 단기·장기 목표를 동시에 제공",
        how: "웨이브 클리어 시 골드 보상(장기) + 스탯 선택 보상(즉각) 이원화. 웨이브별 골드 보상량을 점진 증가 커브로 설계하여 후반부 선택의 무게감 강화",
        what: "웨이브 1-9 총 보상 5,490G vs 1개 스탯 MAX 비용 5,457G (오차 0.6%). 50건 플레이 테스트로 이 균형점을 검증"
      },
      {
        title: "특수 무기 시스템",
        why: "성장 시스템만으로는 '숫자가 커지는 재미'에 그침. 무기별 부가효과로 '플레이 방식 자체가 달라지는 재미'를 추가하여 빌드 다양성 확보",
        how: "4종 무기의 기본 데미지를 낮추고 부가효과로 역할 차별화. 순수 화력(삽) vs 지속 피해(화염) vs 군중 제어(얼음) vs 범위 확산(번개)",
        what: "삽: 순수 데미지 특화 / 화염: 초당 1의 화상 피해가 3초간 지속 / 얼음: 이동속도 10% 감소가 2초간 지속 / 번개: 주변 적에게 50% 데미지 전이. 테스트 시 4종 무기 선택 비율이 골고루 분포됨을 확인"
      },
      {
        title: "보스 시스템",
        why: "일반 웨이브와 차별화된 긴장감과, 강대한 적을 처치했을 때의 성취감을 제공하기 위함",
        how: "돌진 패턴+십자 탄막 패턴 설계로 기존 몬스터와는 다른 패턴으로 난이도 상승",
        what: "보스 등장 시 전용 경고 문구 재생, 보스만의 패턴으로 긴장감 극대화"
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
        title: "기획서 다운로드 (Excel Sheet)",
        url: "./assets/docs/UndeadSurvivor_기획서_박진.xlsx",
        icon: "download-outline",
        isDownload: true
      }
    ]
  },

  babysanta: {
    title: "Baby Santa Run",
    tagline: "웹툰 IP를 캐주얼 게임으로 — 단순 조작 × 수집 목표 설계",
    modalImage: "./assets/images/modal-babysanta.png",
    info: {
      platform: "모바일, PC",
      engine: "언리얼 엔진 5",
      role: "웹툰 시놉시스 기획 & 데모 게임 기획 & 개발",
      team: "4인",
      period: "2024.11.01 ~ 2024.12.19",
      note: "NCA 장기과정 1학기 | 웹툰 IP 기반 캐주얼 게임"
    },
    overview: "웹툰 IP의 세계관을 게임으로 확장할 때, '웹툰 감상 직후 플레이'라는 상황을 고려해 피로도가 낮은 캐주얼 러닝 장르를 선택했습니다. 방향 조정과 점프만으로 조작하며, 맵 곳곳에 숨겨진 선물을 수집하는 게임입니다.",
    concept: [
      "웹툰 감상 직후 플레이하는 상황을 고려하여 <strong>조작 피로도를 최소화</strong>한 캐주얼 러닝으로 장르 결정",
      "웹툰 IP의 톤앤매너를 맵에 반영하여 <strong>서사와 플레이 경험을 연결</strong>"
    ],
    target: {
      who: "캐주얼 스마트폰 게임과 웹툰을 즐기는 사용자",
      what: ["웹툰 IP의 톤앤매너를 살린 맵을 감상하며 달리는 재미", "최고 점수를 위해 숨겨진 선물 상자를 찾고 맵을 탐험하는 재미"],
      how: "웹툰 + 캐주얼 + 러닝 = 웹툰 IP 기반 캐주얼 러닝 게임"
    },
    systems: [
      {
        title: "플레이어 조작 시스템",
        why: "웹툰 감상 직후 플레이하는 상황에서 복잡한 조작은 진입 장벽. 캐릭터는 항상 달리는 상태로 두고, 플레이어의 판단을 '어디로 갈지'와 '언제 점프할지'에 집중시킴",
        how: "기본 상태를 '달리는 중'으로 설정. 방향 조정 + 점프만으로 플레이 가능",
        what: "PC: W,A,S,D + 점프(SPACE) / 모바일: 가상 패드 + 점프 버튼. 조작 2가지로 통일"
      },
      {
        title: "선물 상자 수집 시스템",
        why: "러닝 게임에서 '달리는 행위' 자체만으로는 목표 의식이 약함. 수집 요소를 배치하여 '경로 선택'이라는 판단을 추가하고, 수집 진행도가 곧 점수이자 동기가 되도록 설계",
        how: "맵 곳곳에 선물 상자 배치. 일부는 메인 루트, 일부는 우회 루트에 숨겨 탐색 유도. 접촉 즉시 획득 처리",
        what: "화면 우측 상단에 실시간 수집량 표시로 진행도를 직관적으로 피드백"
      },
      {
        title: "TP(Teleport Point) 리스폰 시스템",
        why: "맵 50% 이상 진행 후 추락하면 처음부터 재시작 → 캐주얼 유저 이탈 위험. 시작점으로 돌려보내는 것도 반복 피로 유발. '가장 가까운 지점으로 즉시 복귀'가 피로감과 진행도 보존의 균형점",
        how: "맵 외곽 바닥면에 트리거 박스 배치. 접촉 시 가장 가까운 TP 지점으로 자동 이동",
        what: "진행도 손실 최소화로 '추락 = 게임 오버' 대신 '추락 = 약간의 손실 후 재개'를 경험"
      }
    ],
    videos: [
      { title: "플레이 영상", url: "https://youtube.com/watch?v=-E7Dl32FcRI" }
    ]
  },

  maeil: {
    title: "매일 보관함",
    tagline: "VR 상호작용 5종 기획으로 '보는 VR'을 '참여하는 VR'로 전환한 힐링 게임",
    modalImage: "./assets/images/modal-maeil.png",
    info: {
      platform: "PC, Meta Quest 3",
      engine: "언리얼 엔진 5",
      role: "기획 & 사운드 디자인 & 서브 PM",
      team: "6인 (기획 2인 + 개발 3인 + 아트 1인)",
      period: "2025.03.17 ~ 2025.08.20",
      note: "NCA 장기과정 2기 쇼케이스 전시"
    },
    overview: "'보는 것 위주라 VR 장점이 없다'는 초기 피드백을 받고, 상호작용 5종을 기획·제안하여 전체 채택. '보는 VR'에서 '참여하는 VR'로 경험을 전환한 몰입형 VR 힐링 게임입니다.",
    concept: [
      "초기 피드백 '상호작용 부족' → <strong>VR 상호작용 5종 기획·제안, 전체 채택</strong>",
      "VR 초보 사용자를 고려한 <strong>직관적 상호작용 구조</strong> — 윤곽선 강조, 관대한 판정, 자동 완성 퍼즐",
      "플레이어의 사진을 게임 속 입체 홀로그램으로 변환하는 <strong>개인화 시스템</strong> 기획"
    ],
    target: {
      who: "반복되는 일상 속에서 무기력함을 느끼는 사람",
      what: ["플레이어의 사진이 게임 속에 반영되는 재미", "색을 되찾는 순간, 2D 세상이 3D 세상으로 변화하는 시각적 재미", "플레이어가 주체적으로 이야기를 진행하는 재미"],
      why: "대부분의 감정이나 일상의 소중함을 다루는 콘텐츠는 '보는 콘텐츠'. 게임으로 제작해 '플레이어의 행동이 이야기를 진행시키는' 구조로 몰입감 향상",
      how: "VR + 인터랙티브 무비 + 게임 = 몰입형 VR 힐링 게임"
    },
    systems: [
      {
        title: "텔레포트 이동 시스템",
        why: "VR 이동 방식의 선택지: 컨트롤러 조작(멀미 유발), 직접 걷기(공간 제한), 텔레포트(멀미 없이 넓은 공간 이동). 힐링 게임에서 멀미는 치명적이므로 텔레포트 채택",
        how: "포인터로 목적지 지정 → 즉시 이동. 2m 이내 근거리는 직접 걷기도 가능하게 하여 자연스러움 유지",
        what: "VR 초보자도 멀미 없이 공간을 탐색하며 상호작용에 집중 가능"
      },
      {
        title: "상호작용 강조 시스템",
        why: "VR 환경은 시야에 정보가 많아 상호작용 대상을 놓치기 쉬움. 특히 VR 초보자는 '무엇을 만질 수 있는지' 자체를 모름. 명시적 시각 피드백 없이는 진행이 막힘",
        how: "상호작용 가능한 오브젝트에 굵은 윤곽선 표시. 그랩 시 연계 대상 오브젝트도 함께 강조하여 '다음 행동'을 유도",
        what: "플레이어가 별도 설명 없이 '무엇을 만질 수 있고, 어디에 쓰는지' 자연스럽게 이해"
      },
      {
        title: "버스 카드 퍼즐 시스템",
        why: "단순히 보고 지나가는 것이 아니라, 플레이어의 행동이 진행을 트리거하는 '주체적 경험'을 만들기 위함. 퍼즐 난이도가 높으면 힐링 톤이 깨지므로 '성공이 보장된 퍼즐'로 설계",
        how: "버스 카드 조각을 시야 높이에, 목적지와 근접하게 배치. 판정 범위를 관대하게 설정하여 조작 실패로 몰입이 깨지지 않도록",
        what: "카드가 표지판에 닿으면 자동으로 퍼즐 완성. '내가 했다'는 성취감은 주되, 실패 가능성은 제거"
      },
      {
        title: "사진 업로드 & 입체화 시스템",
        why: "엔딩에서 '세상이 색을 되찾았다'는 감각을 극대화하려면, 플레이어 자신의 기억이 게임 안에 있어야 함. 범용 이미지가 아닌 '나의 사진'이 등장할 때 감정적 몰입도가 다름",
        how: "AI 뎁스 분석으로 사진을 3단계 레이어(전경/중경/배경)로 분리 후 입체화",
        what: "플레이어가 업로드한 사진이 입체 홀로그램 카드로 변환되어 게임 속에 반영. 개인화된 엔딩 경험 제공"
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
    tagline: "입력→판정→피드백, 게임의 최소 루프를 설계·구현한 첫 프로젝트",
    modalImage: "./assets/images/modal-kanji.png",
    info: {
      platform: "PC, 모바일",
      engine: "Claude Code, Cursor",
      role: "기획 & AI 바이브 코딩",
      team: "1인",
      period: "2025.07.02 ~ 2025.07.10",
      note: "AI 바이브 코딩 학습 [1/3]"
    },
    overview: "한자 읽기를 4지선다 퀴즈로 만든 첫 프로젝트입니다. '입력→판정→피드백'이라는 가장 단순한 게임 루프를 직접 설계·구현했습니다.",
    concept: [
      "<strong>'입력→판정→피드백'</strong> 단일 루프만으로 게임 전체를 구성 — 최소 구조에서 플레이 동기가 유지되는지 확인",
      "콤보 보너스 설계로 <strong>'연속 성공'이라는 단기 목표</strong>를 부여 — 단순 반복을 동기 부여 루프로 전환"
    ],
    systems: [
      {
        title: "퀴즈 루프 시스템",
        why: "게임의 최소 단위인 '입력→판정→피드백' 루프를 설계하고, 이 루프만으로 플레이 동기가 유지되는지 검증하기 위함",
        how: "문제 출제 → 4지선다 입력 → 정답 판정 → 즉각 피드백 → 다음 문제. 연속 정답 시 콤보 보너스로 '끊지 않고 계속하고 싶은' 동기 설계",
        what: "정답/오답 즉각 피드백 + 콤보 보너스. 단순한 루프지만 '한 문제 더'를 유도하는 구조"
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
    tagline: "시간 압박 × 콤보 보상 — 단순 규칙 위에 긴장감과 동기를 설계",
    modalImage: "./assets/images/modal-apple.png",
    info: {
      platform: "PC, 모바일",
      engine: "Claude Code, Cursor",
      role: "기획 & AI 바이브 코딩",
      team: "1인",
      period: "2025.08.11 ~ 2025.08.14",
      note: "AI 바이브 코딩 학습 [2/3]"
    },
    overview: "'합이 10이 되는 조합 찾기'라는 단순한 규칙 하에, 2분 제한과 콤보 보상을 연결해 긴장감을 유도한 게임입니다.",
    concept: [
      "<strong>'합이 10' 단일 규칙</strong> 위에 시간 압박(2분)과 콤보 보상을 얹어 — 규칙은 단순하되, 경험은 풍부하게",
      "연속 성공 시 <strong>콤보 보너스</strong>로 '끊기 싫은' 동기 설계 + 정체 시 <strong>힌트 자동 표시</strong>로 이탈 방지",
      "퀴즈(1단계)에서는 정답이 하나였지만, 이번에는 <strong>여러 조합 중 고르는 판단</strong>이 추가되어 설계 난이도를 한 단계 높임"
    ],
    systems: [
      {
        title: "숫자 조합 퍼즐 시스템",
        why: "퀴즈에서는 정답이 하나지만, 숫자 조합에서는 정답이 여러 개. 같은 보드에서도 플레이어마다 다른 조합을 선택하는 재미를 검증",
        how: "15×15 그리드에서 가로/세로 연결로 합 10 조합 수확. 2분 제한으로 시간 압박, 연속 수확 시 콤보 배율 증가",
        what: "콤보 보너스(연속 성공 유도) + 힌트 시스템(정체 시 자동 표시)으로 '몰입 유지'와 '이탈 방지' 양립"
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
    tagline: "풀 수 없는 퍼즐 문제를 역생성 알고리즘으로 구조적 해결",
    modalImage: "./assets/images/modal-puzzle.png",
    info: {
      platform: "PC, 모바일",
      engine: "Claude Code, Cursor",
      role: "기획 & AI 바이브 코딩",
      team: "1인",
      period: "2025.10.03 ~ 2025.10.06",
      note: "AI 바이브 코딩 학습 [3/3]"
    },
    overview: "랜덤 셔플로 퍼즐을 생성하면 50% 확률로 '풀 수 없는 퍼즐'이 만들어지는 문제에 직면. 원인을 분석하고, 역생성 알고리즘(완성→역섞기)으로 구조적으로 해결한 프로젝트입니다.",
    concept: [
      "<strong>문제 발견</strong>: 랜덤 셔플 시 50% 확률로 해결 불가능한 퍼즐 생성",
      "<strong>구조적 해결</strong>: 완성 상태에서 역으로 섞는 역생성 알고리즘으로 100% 해결 가능 보장"
    ],
    systems: [
      {
        title: "역생성 알고리즘",
        why: "랜덤 셔플은 구현이 간단하지만 수학적으로 50%가 풀 수 없는 배치. '낮은 확률로 발생하는 버그'가 아니라 '구조적 결함'이므로 근본적 해결 필요",
        how: "발상 전환: 섞은 뒤 풀 수 있는지 검증하는 대신, 완성 상태에서 유효한 이동만 역으로 수행하여 항상 해결 가능한 배치 생성",
        what: "역이동 횟수로 난이도 제어 (Easy 20회, Normal 50회, Hard 100회). 난이도 설계와 생성 로직을 하나의 파라미터로 통합"
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
    tagline: "6개월간 126화 완결 — 장기 프로젝트 완주와 마감 관리 능력의 증명",
    modalImage: "./assets/images/modal-novel.png",
    info: {
      platform: "노벨피아",
      engine: "-",
      role: "작가",
      team: "1인",
      period: "2024.10.01 ~ 2025.03.31",
      note: "총 126화 (에필로그, 프롤로그 포함)"
    },
    overviewTitle: "소설 개요",
    overview: "노벨피아 플랫폼에서 6개월간 126화를 연재하여 완결한 웹소설입니다. 주 5회 연재 일정을 끝까지 준수하며, 에피소드 단위의 구조 설계와 장기 프로젝트 관리를 경험했습니다.",
    concept: [
      "<strong>6개월간 126화 완결</strong> — 장기 프로젝트를 중단 없이 완주한 경험",
      "주 5회 연재 일정 준수 — <strong>마감 관리 능력</strong>과 자기 규율 증명",
      "에피소드 단위 <strong>서사 구조 설계</strong> — 회차별 전개 구성, 복선 배치, 장편 스토리 관리"
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

  // 외부 링크 버튼들을 이미지 하단에 배치
  let buttonsHTML = externalLinkHTML + externalLinksHTML;

  let modalImageHTML = '';
  if (project.modalImage) {
    modalImageHTML = `
      <div class="modal-image-container">
        <div class="modal-image">
          <img src="${project.modalImage}" alt="${project.title}" loading="lazy">
        </div>
        ${buttonsHTML ? `<div class="modal-image-buttons">${buttonsHTML}</div>` : ''}
      </div>
    `;
  } else if (buttonsHTML) {
    // 이미지가 없어도 버튼은 표시
    modalImageHTML = `<div class="modal-image-buttons no-image">${buttonsHTML}</div>`;
  }

  // 웹소설의 경우 개발 환경 행 제거
  const showEngine = project.info.engine && project.info.engine !== "-";

  // 개요 제목 (웹소설은 '소설 개요', 나머지는 '게임 개요')
  const overviewTitle = project.overviewTitle || "게임 개요";

  // 테이블 HTML 생성
  let infoTableHTML = '';
  if (showEngine) {
    infoTableHTML = `
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
    </table>`;
  } else {
    infoTableHTML = `
    <table class="modal-info-table">
      <tr>
        <th>플랫폼</th>
        <td>${project.info.platform}</td>
        <th>담당 역할</th>
        <td>${project.info.role}</td>
      </tr>
      <tr>
        <th>팀 구성</th>
        <td>${project.info.team}</td>
        <th>기간</th>
        <td>${project.info.period}</td>
      </tr>
      <tr>
        <th>비고</th>
        <td colspan="3">${project.info.note}</td>
      </tr>
    </table>`;
  }

  return `
    <div class="modal-header">
      <h2 class="modal-title">${project.title}</h2>
      <p class="modal-tagline">"${project.tagline}"</p>
    </div>

    ${modalImageHTML}

    ${infoTableHTML}

    <div class="modal-section">
      <h3 class="modal-section-title">${overviewTitle}</h3>
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



// Video Lightbox
const videoLightbox = document.querySelector("[data-video-lightbox]");
const videoLightboxOverlay = document.querySelector("[data-video-lightbox-overlay]");
const videoLightboxClose = document.querySelector("[data-video-lightbox-close]");
const videoLightboxEmbed = document.querySelector("[data-video-lightbox-embed]");

function openVideoLightbox(youtubeUrl) {
  const videoId = getYouTubeId(youtubeUrl);
  if (!videoId) return;
  videoLightboxEmbed.innerHTML = `<iframe src="https://www.youtube.com/embed/${videoId}?autoplay=1" frameborder="0" allowfullscreen allow="autoplay"></iframe>`;
  videoLightbox.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeVideoLightbox() {
  videoLightboxEmbed.innerHTML = "";
  videoLightbox.classList.remove("active");
  document.body.style.overflow = "";
}

document.addEventListener("click", function (e) {
  const videoBtn = e.target.closest("[data-video-btn]");
  if (videoBtn) {
    e.preventDefault();
    openVideoLightbox(videoBtn.dataset.videoUrl);
  }
});

videoLightboxClose.addEventListener("click", closeVideoLightbox);
videoLightboxOverlay.addEventListener("click", closeVideoLightbox);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && videoLightbox.classList.contains("active")) {
    closeVideoLightbox();
  }
});


// Scroll FAB Buttons
const scrollFabGroup = document.querySelector(".scroll-fab-group");
const scrollTopBtn = document.querySelector("[data-scroll-top]");
const scrollBottomBtn = document.querySelector("[data-scroll-bottom]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    scrollFabGroup.classList.add("visible");
  } else {
    scrollFabGroup.classList.remove("visible");
  }
});

scrollTopBtn.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

scrollBottomBtn.addEventListener("click", function () {
  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
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



