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



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let j = 0; j < pages.length; j++) {
      if (this.innerHTML.toLowerCase() === pages[j].dataset.page) {
        pages[j].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[j].classList.remove("active");
      }
    }

    for (let j = 0; j < navigationLinks.length; j++) {
      if (navigationLinks[j] === this) {
        navigationLinks[j].classList.add("active");
      } else {
        navigationLinks[j].classList.remove("active");
      }
    }

  });
}



// Project Modal Data
const projectData = {
  puzzledungeon: {
    title: "퍼즐 던전",
    tagline: "환경 단서로 해법을 유도한 퍼즐 던전",
    summarySections: [
      {
        title: "프로젝트 개요",
        text: "환경 단서를 관찰해 규칙을 추론하고, 기믹을 직접 조작해 탈출하도록 설계·구현한 방탈출형 퍼즐 던전입니다."
      },
      {
        title: "작업 범위",
        items: ["던전 기획", "기믹 구현", "직접 플레이 확인"]
      },
      {
        title: "핵심 설계",
        items: [
          "환경 단서 → 규칙 추론 → 행동으로 이어지는 플레이 흐름",
          "버튼 A/B 상태와 돌기둥·출구의 상태 연동",
          "철판을 이용한 가시함정 파훼"
        ]
      },
      {
        title: "문제 해결/개선",
        items: [
          "기믹 기능 스폰 범위 문제를 추적·수정",
          "왕복 발판 방식에서 환경 요소를 직접 활용하는 방식으로 변경"
        ]
      }
    ],
    externalLinks: [
      {
        title: "기획서 PDF 보기",
        url: "./assets/docs/퍼즐 던전 콘텐츠 기획서_박진.pdf",
        icon: "document-text-outline"
      }
    ]
  },
  roguelike: {
    title: "Undead Survivor: Farmer's Fury",
    tagline: "Unity 기반 2D 로그라이트 1인 기획·개발",
    modalImage: "./assets/images/modal-roguelike.png",
    info: {
      platform: "PC",
      engine: "Unity, C#",
      role: "1인 기획·개발",
      team: "1인",
      period: "2025.12 (6일)",
      note: "개인 프로젝트"
    },
    overview: "성장·보상·재화 구조를 설계하고, 직접 플레이하며 후반 성장과 전투 흐름을 조정한 1인 개발 프로젝트입니다.",
    concept: [
      "<strong>3경로 성장 구조</strong>: 레벨업은 기본 성장, 상점은 원하는 스탯의 선택적 특화, 클리어 보상은 특수 능력을 통한 전략 확장으로 역할을 구분했습니다.",
      "<strong>특수 무기 역할 분리</strong>: 대미지 차이만 있던 무기 구성에 화상·슬로우·체인 등 고유 효과를 추가해 선택에 따라 플레이 방식이 달라지도록 조정했습니다.",
      "<strong>후반 난이도 곡선 조정</strong>: 적 스탯이 지나치게 빠르게 증가하던 구조를 확인하고, 지수 증가 방식에서 선형 증가 방식으로 변경했습니다."
    ],
    target: {
      who: "로그라이트 게임을 즐기고, 반복 플레이를 통한 점진적 성장을 좋아하는 플레이어",
      what: [
        "레벨업·상점·클리어 보상을 활용한 성장 선택",
        "특수 효과가 다른 무기를 활용한 빌드 구성",
        "웨이브 진행에 따라 달라지는 전투와 성장 대응"
      ],
      how: "로그라이트 전투 + 3경로 성장 + 특수 무기 선택"
    },
    systems: [
      {
        title: "성장 구조",
        why: "특정 보상 선택에 따라 기본 스탯 성장이 늦어질 수 있어, 플레이 과정에서 기본 성장을 보장할 별도 경로가 필요했습니다.",
        how: "레벨업은 기본 성장, 상점은 원하는 스탯의 선택적 특화, 클리어 보상은 특수 능력을 통한 전략 확장으로 역할을 분리했습니다.",
        what: "성장 수단마다 서로 다른 역할을 갖도록 3경로 성장 구조를 구성했습니다."
      },
      {
        title: "상점 / 보상 구조",
        why: "초기에는 웨이브 보상에 비해 상점 업그레이드 비용이 높아, 플레이로 얻은 골드만으로 성장하기 어려웠습니다.",
        how: "상점 비용 증가율과 웨이브별 골드 보상을 여러 값으로 조정하며 플레이 과정에서 사용할 수 있는 성장 자원의 범위를 맞췄습니다.",
        what: "상점과 클리어 보상이 각자 다른 성장 선택으로 기능하도록 비용과 보상 구조를 조정했습니다."
      },
      {
        title: "특수 무기",
        why: "초기 무기들은 주로 대미지 차이로만 구분되어 선택에 따른 플레이 차이가 부족했습니다.",
        how: "기본 대미지를 조정하고 화상·슬로우·체인 등 고유 부가효과와 성장 방식을 분리했습니다.",
        what: "무기마다 화력, 거리 확보, 다수 적 대응 등 서로 다른 역할을 갖도록 구성했습니다."
      },
      {
        title: "난이도 곡선",
        why: "초기 적 스탯이 웨이브마다 지수적으로 증가해 후반 구간에서 플레이어 성장과 격차가 크게 벌어졌습니다.",
        how: "적 성장식을 2^(Wave-1) 방식에서 1 + (Wave-1) × 0.5 방식으로 변경했습니다. Wave 5 기준 16배에서 3배, Wave 9 기준 256배에서 5배 수준으로 완화했습니다.",
        what: "플레이어 성장과 적 성장의 격차가 급격하게 벌어지지 않도록 후반 난이도 곡선을 조정했습니다."
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
        title: "포트폴리오 PDF 다운로드",
        url: "./assets/docs/UndeadSurvivor_Portfolio.pdf",
        icon: "download-outline",
        isDownload: true
      }
    ],
    learnings: "수치 설계는 '처음에 옳은 값을 찾는 것'이 아니라 '의도와 실제 플레이의 차이를 발견하고 좁혀가는 것'임을 체감. 플레이 테스트로 수집한 50건의 체감 데이터가 엑셀 시뮬레이션을 보완하는 밸런싱 기준이 된다는 것을 학습."
  },

  slaythespire: {
    overviewTitle: "분석 개요",
    conceptTitle: "분석 기준",
    systemsTitle: "핵심 분석",
    title: "Slay the Spire — 코스트 체계 역기획서",
    tagline: "아이언클래드 공격 카드의 비용과 효과를 기준에 따라 비교하고, 비용 구조를 유형별로 정리",
    modalImage: "./assets/images/SlaytheSpire.png",
    info: {
      platform: "PC, 모바일",
      engine: "-",
      role: "시스템 분석 & 문서화",
      team: "1인",
      period: "2026.01.21 — 2026.02.16",
      note: "레퍼런스 분석"
    },
    overview: "Slay the Spire 아이언클래드의 공격 카드를 대상으로 기본 카드인 타격의 1코스트 / 6대미지를 기준선으로 두고, 카드별 대미지와 부가효과의 관계를 비교했습니다. 이후 비용 구조를 유형별로 분류하고, 구성 차이를 바탕으로 신규 카드안을 제안했습니다.",
    concept: [
      "<strong>기준선 설정</strong>: 타격의 1코스트 / 6대미지를 비교 기준으로 두고 공격 카드의 비용과 효과를 살펴봤습니다.",
      "<strong>비용 구조 분류</strong>: 대미지와 부가효과, 조건, 시너지 등 카드가 비용을 사용하는 방식을 유형별로 정리했습니다."
    ],
    systems: [
      {
        title: "비용 구조 분석",
        why: "카드마다 비용과 효과가 달라 동일한 기준에서 비교할 수 있는 출발점이 필요했습니다.",
        how: "기본 카드 타격의 1코스트 / 6대미지를 기준으로 카드의 대미지, 부가효과, 조건과 시너지 요소를 비교했습니다.",
        what: "공격 카드의 비용 구조를 대미지와 부가효과, 조건, 시너지에 따라 5가지 유형으로 분류했습니다."
      },
      {
        title: "HP 소모 카드 제안",
        why: "HP를 비용으로 사용하는 공격 카드의 구성 폭이 제한적이어서, 해당 유형의 선택지를 넓히는 카드안을 검토했습니다.",
        how: "기존 HP 소모 카드와 2코스트 카드의 수치를 비교해, 2코스트 / 25대미지 / HP 4 소모의 신규 카드안 피의 계약을 제안했습니다.",
        what: "기존 HP 소모 카드와 2코스트 공격 카드군을 비교해 제안값의 위치를 검토했습니다."
      }
    ],
    externalLinks: [
      {
        title: "역기획서 전문 (PDF)",
        url: "./assets/docs/SlayTheSpire_코스트 체계 역기획서_박진.pdf",
        icon: "document-text-outline"
      }
    ],
    learnings: "감각적 '강한 카드/약한 카드' 평가를 '코스트 1당 기대 대미지' 같은 기준으로 치환할 때, 개별 카드가 아닌 비용 체계 전체가 보이는 경험을 학습. 역기획은 '무엇이 있는가'가 아니라 '왜 그렇게 설계했는가'를 복원하는 작업임을 체득."
  },

  stellarblade: {
    overviewTitle: "분석 개요",
    conceptTitle: "분석 기준",
    systemsTitle: "핵심 분석",
    title: "Stellar Blade — 방어 액션 시스템 역기획서",
    tagline: "4종 방어 액션의 대응 조건과 보상을 분석하고, 세키로·P의 거짓과 비교",
    modalImage: "./assets/images/StellarBlade.png",
    info: {
      platform: "PlayStation 5, PC",
      engine: "-",
      role: "시스템 분석 & 문서화",
      team: "1인",
      period: "2025.12.03 — 2026.01.02",
      note: "레퍼런스 분석"
    },
    overview: "Stellar Blade의 회피, 패링, 블링크, 리펄스 4종 방어 액션을 대상으로 각각의 대응 조건과 성공 보상을 정리했습니다. 이후 세키로와 P의 거짓의 방어 구조를 비교해 작품별 선택 방식의 차이를 분석하고, 전투 상황과 UI에서 확인한 문제에 대한 개선안을 제안했습니다.",
    concept: [
      "<strong>방어 액션 비교</strong>: 4종 방어 액션이 어떤 공격에 대응하고 성공 시 어떤 보상을 제공하는지 비교했습니다.",
      "<strong>유사 장르 비교</strong>: 세키로와 P의 거짓의 방어 구조를 함께 살펴보며 각 게임이 플레이어에게 요구하는 판단과 선택의 차이를 정리했습니다."
    ],
    systems: [
      {
        title: "방어 액션 구조 분석",
        why: "4종 방어 액션이 비슷한 회피 수단이 아니라, 공격 유형과 성공 보상에 따라 서로 다른 선택지로 기능하는지 확인하고자 했습니다.",
        how: "회피, 패링, 블링크, 리펄스의 사용 조건과 성공 시 발생하는 회피·반격 기회·에너지 획득 등의 보상을 비교했습니다.",
        what: "일반·노랑·파랑·보라 공격 신호에 따라 대응 액션이 나뉘고, 패리는 베타 에너지, 회피·블링크·리펄스는 버스트 에너지를 얻도록 보상이 분리된 구조를 확인했습니다."
      },
      {
        title: "비교 분석과 개선안",
        why: "세키로·P의 거짓과 비교해, Stellar Blade가 여러 방어 선택지를 제공하면서도 색상 신호와 방어 실패 시 안전망으로 학습 부담을 낮추는 차이를 확인하고자 했습니다.",
        how: "세 게임의 핵심 방어 방식, 실패 페널티, 성공 보상, 시각 신호를 비교하고, Stellar Blade의 다수전 피격 상황과 스킬트리 정보 전달 문제를 별도로 분석했습니다.",
        what: "블링크·리펄스 성공 후 다른 적에게 피격돼 성공 피드백이 끊기는 상황에는 성공 직후 0.3~0.5초 적 슬로우를 제안했습니다. 스킬트리에서는 공격 계열이 먼저 노출돼 생존 스킬의 중요성이 가려지는 문제에 대해 생존 트리 우선 노출과 추천 표시를 제안했습니다."
      }
    ],
    externalLinks: [
      {
        title: "역기획서 전문 (PDF)",
        url: "./assets/docs/스텔라블레이드_역기획서_박진.pdf",
        icon: "document-text-outline"
      }
    ],
    learnings: "단일 게임의 '방어 시스템'을 분석하는 것과, 3개 게임을 비교하여 각 게임의 설계 철학을 도출하는 것은 완전히 다른 작업이라는 것을 체감. 비교는 트레이드오프를 드러내고, 트레이드오프는 '왜'의 해답이 됨을 학습."
  },

  babysanta: {
    title: "Baby Santa Run",
    tagline: "웹툰 IP를 캐주얼 게임으로 — 단순 조작과 수집 목표 설계",
    modalImage: "./assets/images/modal-babysanta.png",
    info: {
      platform: "모바일, PC",
      engine: "Unreal Engine 5",
      role: "시스템 기획 — 조작/수집/리스폰 3종 설계, 웹툰 IP 시놉시스 기획 및 데모 개발",
      team: "4인",
      period: "2024.11.01 — 2024.12.19",
      note: "NCA 장기과정 1학기 | 웹툰 IP 기반 캐주얼 게임"
    },
    overview: "웹툰 IP를 게임으로 확장하는 상황을 가정하고, 짧게 플레이할 수 있는 캐주얼 러닝 형태로 제작했습니다. 방향 조정과 점프를 중심으로 조작하고, 맵을 탐색하며 선물을 수집하는 구조입니다.",
    concept: [
      "웹툰 감상 이후 짧게 플레이하는 상황을 가정해 조작 가짓수를 줄인 캐주얼 러닝 장르를 선택했습니다.",
      "웹툰 IP의 분위기를 게임 맵과 수집 목표에 반영하고자 했습니다."
    ],
    target: {
      who: "캐주얼 모바일 게임과 웹툰 콘텐츠를 즐기는 사용자",
      what: [
        "맵을 달리며 숨겨진 선물 상자를 찾는 탐색",
        "단순한 조작으로 목표 지점까지 진행하는 플레이"
      ],
      how: "웹툰 IP + 캐주얼 러닝 + 수집 목표"
    },
    systems: [
      {
        title: "플레이어 조작 시스템",
        why: "짧은 플레이를 가정했기 때문에 복잡한 입력보다 방향 조정과 점프 중심의 단순한 조작이 적합하다고 판단했습니다.",
        how: "기본 상태를 '달리는 중'으로 두고, 방향 조정과 점프만으로 플레이할 수 있도록 구성했습니다.",
        what: "PC에서는 W/A/S/D와 Space, 모바일에서는 가상 패드와 점프 버튼을 사용하도록 조작 방식을 단순화했습니다."
      },
      {
        title: "선물 상자 수집 시스템",
        why: "단순히 달리는 것 외에 플레이 중 확인할 목표가 필요했습니다.",
        how: "메인 동선과 우회 동선에 선물 상자를 배치하고 접촉 시 획득되도록 구성했습니다.",
        what: "화면에서 현재 수집량을 확인할 수 있도록 표시했습니다."
      },
      {
        title: "TP(Teleport Point) 리스폰 시스템",
        why: "추락할 때마다 처음부터 다시 시작하면 반복 구간이 길어질 수 있어, 진행 흐름을 유지할 복귀 방식이 필요했습니다.",
        how: "맵 외곽의 트리거에 접촉하면 가까운 TP 지점으로 이동하도록 구성했습니다.",
        what: "추락 후 전체 구간을 다시 플레이하지 않고 가까운 지점에서 이어갈 수 있도록 했습니다."
      }
    ],
    videos: [
      { title: "플레이 영상", url: "https://youtube.com/watch?v=-E7Dl32FcRI" }
    ],
    learnings: "IP 확장 기획에서 '원작 팬의 기대'와 '신규 유저의 진입 장벽'은 서로 상충한다는 것을 첫 팀 프로젝트에서 직접 체감. 캐주얼 장르 선정은 그 두 축 사이의 최소 공약수를 찾는 선택이었음을 학습."
  },

  maeil: {
    title: "매일 보관함",
    tagline: "6인 VR 팀 프로젝트 · 시스템 기획 / 서브 PM",
    modalImage: "./assets/images/modal-maeil.png",
    info: {
      platform: "PC, Meta Quest 3",
      engine: "Unreal Engine 5",
      role: "시스템 기획 / 서브 PM",
      team: "6인 (기획 2인 + 개발 3인 + 아트 1인)",
      period: "2025.03.17 — 2025.08.20",
      note: "NCA 장기과정 2기 쇼케이스 전시"
    },
    overview: "6인 팀에서 시스템 기획과 서브 PM을 맡았습니다. 초기 기획의 플레이타임과 제작 범위를 줄이는 방안을 제안하고, VR에서 직접 참여할 수 있는 상호작용 5종을 기획해 프로젝트에 반영했습니다.",
    concept: [
      "초기 피드백을 바탕으로 VR 레퍼런스를 조사하고, 플레이어가 직접 개입할 수 있는 상호작용 5종을 기획·제안해 프로젝트에 반영했습니다.",
      "VR 초보 사용자도 쉽게 조작할 수 있도록 상호작용 대상을 윤곽선으로 표시하고, 버스카드 퍼즐은 목표 위치의 인식 범위를 넓혀 조작 부담을 낮췄습니다.",
      "플레이어가 업로드한 사진을 게임 안에 반영하는 기능을 기획해 엔딩 경험과 연결했습니다."
    ],
    target: {
      who: "반복되는 일상 속에서 무기력함을 느끼는 사람",
      what: [
        "플레이어가 업로드한 사진이 게임 속에 등장하는 경험",
        "색을 되찾는 과정에서 시각적 변화가 발생하는 연출",
        "상호작용을 통해 이야기를 진행하는 경험"
      ],
      why: "감정과 일상의 소중함을 다루는 이야기를 단순히 감상하는 방식이 아니라, 플레이어가 직접 상호작용하고 자신의 사진을 마주하며, 게임 속 이야기를 자신의 이야기처럼 느낄 수 있도록 구성하고자 했습니다.",
      how: "VR + 인터랙티브 무비 + 게임 = 몰입형 VR 힐링 게임"
    },
    systems: [
      {
        title: "텔레포트 이동 시스템",
        how: "이동에 따른 멀미 부담을 줄이고, 제한된 실제 공간에서도 게임 공간을 탐색할 수 있도록 텔레포트 방식을 사용했습니다."
      },
      {
        title: "상호작용 강조 시스템",
        how: "상호작용 가능한 오브젝트에는 윤곽선을 표시해 무엇을 만질 수 있는지 알 수 있도록 했습니다."
      },
      {
        title: "버스 카드 퍼즐 시스템",
        why: "플레이어가 직접 행동해 진행한다는 감각을 주되, 조작 난이도가 게임의 흐름을 방해하지 않도록 난도를 낮출 필요가 있었습니다.",
        how: "카드 조각과 목적지를 가까운 위치에 배치하고, 카드를 목표 위치에 놓을 때 인식되는 범위를 넓혀 조작 실패를 줄였습니다.",
        what: "카드를 목표 위치에 가져가면 자동으로 완성되도록 구성해 상호작용 과정은 유지하면서 진행 부담을 낮췄습니다."
      },
      {
        title: "사진 업로드 & 입체화 시스템",
        how: "플레이어가 업로드한 사진이 엔딩에 등장하도록 기획해, 게임 속 이야기를 자신의 이야기처럼 느낄 수 있도록 했습니다."
      }
    ],
    teamwork: [
      {
        title: "상호작용 기획 추가",
        problem: "“상호작용이 적고 보는 것 위주라 VR로 할 필요가 없다”는 피드백",
        solution: "VR 레퍼런스를 조사하고 버스카드 퍼즐, 창문 낙서, 버스 태그, 사진 업로드, 사진 감상 등 상호작용 5종을 기획·제안했습니다.",
        result: "제안한 상호작용 5종이 프로젝트에 반영됐습니다."
      },
      {
        title: "기획·아트 리소스 조율",
        problem: "초기 기획은 맵 7개였지만 아트 일정상 모두 제작하기 어려웠고, 예상 플레이타임도 20분을 넘어 목표였던 10분 이내와 맞지 않았습니다.",
        solution: "논의를 플레이타임 기준으로 다시 정리하고, 전시 회전율·NPC 구현 리스크·리소스 부담·연출 대안의 네 가지 근거로 범위 축소를 제안했습니다.",
        result: "팀 합의로 맵을 7개에서 5개로 줄이고 NPC를 제외했으며, 최종 플레이타임을 8~9분으로 조정했습니다."
      },
      {
        title: "Meta Quest 환경에 맞춘 전환 연출 변경",
        problem: "기존에 계획한 전환 연출을 Meta Quest 환경에서 구현하기 어려워 대안을 검토해야 했습니다.",
        solution: "기존 전환 연출에서 유지해야 할 핵심을 2D 화면에서 3D 공간으로 넘어가는 변화로 정리하고, Meta Quest에서 구현 가능한 전환 연출을 대안으로 제안했습니다.",
        result: "팀 합의를 거쳐 대안 연출을 적용했습니다."
      }
    ],
    videos: [
      { title: "홍보 영상", url: "https://youtu.be/33t4nJNPiZc" },
      { title: "플레이 영상", url: "https://youtube.com/watch?v=R3hcZM-BfmQ" }
    ],
    learnings: "기획은 '좋은 안을 내는 것'이 아니라 '제약 조건 안에서 합의를 만들어내는 것'임을 체감. 맵 7개→5개 축소와 XR→VR 연출 대체 합의 과정에서, 기획 의도의 핵심과 구현 형태를 분리해 설명하는 방식을 학습."
  },

  puzzle: {
    title: "슬라이드 퍼즐 게임",
    tagline: "풀 수 없는 퍼즐 문제를 역생성 알고리즘으로 구조적 해결",
    modalImage: "./assets/images/modal-puzzle.png",
    info: {
      platform: "PC, 모바일",
      engine: "Claude Code, Cursor",
      role: "시스템 기획 & AI 활용 프로토타이핑",
      team: "1인",
      period: "2025.10.03 — 2025.10.06",
      note: "개인 프로젝트"
    },
    overview: "랜덤 셔플로 퍼즐을 생성하면 50% 확률로 '풀 수 없는 퍼즐'이 만들어지는 구조적 결함을 발견하고, 역생성 알고리즘으로 해결한 뒤 난이도 곡선까지 설계한 프로젝트입니다.",
    concept: [
      "<strong>문제 발견과 구조적 해결</strong>: 랜덤 셔플의 50% 해결 불가 문제를 역생성 알고리즘(완성 상태에서 역으로 섞기)으로 근본 해결, 100% 해결 가능 보장",
      "<strong>난이도 곡선 설계</strong>: 역이동 횟수를 난이도 파라미터로 활용 — Easy(20회)는 패턴 인지 가능, Normal(50회)은 중간 탐색, Hard(100회)는 초기 배치에서 완성 상태를 추론하기 어려운 수준으로 단계별 체감 차이를 설계",
      "<strong>유저 경험 흐름</strong>: 난이도를 선택하고 퍼즐을 풀면, 이동 횟수와 시간을 피드백으로 제공. 더 적은 이동으로 재도전하는 자기 경쟁 루프를 구성"
    ],
    target: {
      who: "짧은 시간에 두뇌를 사용하는 퍼즐을 즐기는 캐주얼 게이머",
      what: [
        "난이도별로 다른 풀이 전략이 필요한 도전의 재미",
        "이동 횟수를 줄여 자기 기록을 갱신하는 재미"
      ],
      how: "슬라이드 퍼즐 + 역생성 난이도 시스템 = 항상 풀 수 있으면서 도전적인 퍼즐 게임"
    },
    systems: [
      {
        title: "역생성 알고리즘",
        why: "랜덤 셔플은 구현이 간단하지만 수학적으로 50%가 풀 수 없는 배치. '낮은 확률로 발생하는 버그'가 아니라 '구조적 결함'이므로 근본적 해결 필요",
        how: "발상 전환: 섞은 뒤 풀 수 있는지 확인하는 대신, 완성 상태에서 유효한 이동만 역으로 수행하여 항상 해결 가능한 배치 생성",
        what: "생성 로직 자체가 난이도 제어 파라미터를 겸함 — 역이동 횟수 하나로 퍼즐 생성과 난이도 설계를 통합"
      },
      {
        title: "난이도 시스템",
        why: "단일 난이도로는 초보자에게 좌절감, 숙련자에게 지루함. 역생성 횟수를 조절하면 같은 알고리즘으로 체감 난이도를 분리할 수 있음",
        how: "Easy 20회(패턴 인지 가능) / Normal 50회(중간 탐색 필요) / Hard 100회(완성 상태 추론 어려움)로 3단계 설계. 각 단계의 역이동 횟수는 플레이 테스트로 체감 차이가 명확한 구간을 선정",
        what: "난이도별 평균 풀이 시간에 유의미한 차이 발생. 같은 메커니즘으로 난이도별 체감 차이 제공"
      }
    ],
    externalLinks: [
      {
        title: "게임 플레이",
        url: "./assets/webgame/slide-puzzle-game.html",
        icon: "game-controller-outline"
      }
    ],
    learnings: "랜덤 셔플의 '50% 해결 불가' 문제를 접했을 때, 발상을 뒤집어 '완성에서 거꾸로 섞기'로 해결한 경험을 통해 '난수 튜닝'이 아닌 '생성 구조 재설계'가 근본 해결이라는 관점을 학습. 생성 로직과 난이도 파라미터를 하나로 통합하는 설계 이점을 체득."
  },

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
  const isAnalysis = project === projectData.slaythespire || project === projectData.stellarblade;
  const teamworkFirst = project === projectData.maeil;
  let systemsHTML = '';
  if (project.systems && project.systems.length > 0) {
    systemsHTML = `
      <div class="modal-section modal-systems">
        <h3 class="modal-section-title">${project.systemsTitle || "핵심 시스템"}</h3>
        ${project.systems.map(system => `
          <details class="system-episode">
            <summary class="system-summary">
              <span class="system-episode-title">${system.title}</span>
              <span class="system-toggle-icon"></span>
            </summary>
            <div class="system-content">
${system.why ? `
              <div class="system-step">
                <span class="system-label">${isAnalysis ? "분석 목적" : "배경"}</span>
                <p class="system-text">${system.why}</p>
              </div>
              ` : ''}
${system.how ? `
              <div class="system-step">
                <span class="system-label">${isAnalysis ? "분석 방법" : "설계·조정"}</span>
                <p class="system-text">${system.how}</p>
              </div>
              ` : ''}
${system.what ? `
              <div class="system-step">
                <span class="system-label">${isAnalysis ? "발견·제안" : "적용"}</span>
                <p class="system-text">${system.what}</p>
              </div>
              ` : ''}
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
        ${project.teamwork.map(episode => `
          <details class="teamwork-episode">
            <summary class="teamwork-summary">
              <span class="teamwork-episode-title">${episode.title}</span>
              <span class="teamwork-toggle-icon"></span>
            </summary>
            <div class="teamwork-content">
              <div class="teamwork-step">
                <span class="teamwork-label">문제</span>
                <p class="teamwork-text">${episode.problem}</p>
              </div>
              <div class="teamwork-step">
                <span class="teamwork-label">대응</span>
                <p class="teamwork-text">${episode.solution}</p>
              </div>
              <div class="teamwork-step">
                <span class="teamwork-label">결과</span>
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
          if (!videoId) return '';
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
      <a href="${project.externalLink.url}" target="_blank" rel="noopener noreferrer" class="modal-external-link">
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
          const targetAttr = link.isDownload ? '' : 'target="_blank" rel="noopener noreferrer"';
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
        <h3 class="modal-section-title">기획 방향</h3>
        <div class="modal-3w1h">
          <div class="modal-3w1h-item">
            <h4 class="modal-3w1h-label">대상 플레이어</h4>
            <ul class="modal-3w1h-list"><li>${project.target.who}</li></ul>
          </div>
          <div class="modal-3w1h-item">
            <h4 class="modal-3w1h-label">핵심 경험</h4>
            <ul class="modal-3w1h-list">${whatItems}</ul>
          </div>
          ${project.target.why ? `
          <div class="modal-3w1h-item">
            <h4 class="modal-3w1h-label">기획 의도</h4>
            <ul class="modal-3w1h-list"><li>${project.target.why}</li></ul>
          </div>` : ''}
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

  // 웹소설의 경우 엔진/도구 행 제거
  const showEngine = project.info && project.info.engine && project.info.engine !== "-";

  // 프로젝트별 개요 제목, 기본값은 '게임 개요'
  const overviewTitle = project.overviewTitle || "게임 개요";

  // 테이블 HTML 생성
  let infoTableHTML = '';
  if (showEngine) {
    infoTableHTML = `
    <table class="modal-info-table">
      <tr>
        <th>플랫폼</th>
        <td>${project.info.platform}</td>
        <th>엔진 / 도구</th>
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
  } else if (project.info) {
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

    ${project.summarySections ? project.summarySections.map(section => `
    <div class="modal-section">
      <h3 class="modal-section-title">${section.title}</h3>
      ${section.text ? `<p class="modal-text">${section.text}</p>` : ''}
      ${section.items ? `<ul class="modal-list">${section.items.map(item => `<li>${item}</li>`).join('')}</ul>` : ''}
    </div>
    `).join('') : `
    ${infoTableHTML}

    <div class="modal-section">
      <h3 class="modal-section-title">${overviewTitle}</h3>
      <p class="modal-text">${project.overview}</p>
    </div>

    <div class="modal-section">
      <h3 class="modal-section-title">${project.conceptTitle || "핵심 기획"}</h3>
      <ul class="modal-list">
        ${project.concept.map(item => `<li>${item}</li>`).join('')}
      </ul>
    </div>

    `}

    ${teamworkFirst ? teamworkHTML : ''}
    ${targetHTML}
    ${systemsHTML}
    ${teamworkFirst ? '' : teamworkHTML}
    ${videosHTML}
  `;
}

// Open modal
function openProjectModal(projectId) {
  const project = projectData[projectId];
  if (project) {
    modalBody.innerHTML = generateModalContent(project);
    projectModal.classList.add("active");
    modalBody.scrollTop = 0;
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

