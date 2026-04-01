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
  roguelike: {
    title: "Undead Survivor: Farmer's Fury",
    tagline: "3경로 성장과 경제 밸런싱 — 보상과 비용의 오차 0.6%를 달성한 로그라이트",
    modalImage: "./assets/images/modal-roguelike.png",
    info: {
      platform: "PC",
      engine: "Unity, C#",
      role: "시스템 기획 & AI 바이브 코딩",
      team: "1인",
      period: "2025.12 (6일)",
      note: "개인 프로젝트"
    },
    overview: "3경로 성장 시스템을 설계하고, 6일간 3건의 밸런싱 케이스(경제 불균형·무기 차별화·레벨 디자인)를 Excel 설계 → 플레이 테스트 → 수치 조정 반복으로 해결한 로그라이트 게임입니다.",
    concept: [
      "<strong>3경로 성장 설계</strong>: 레벨업(저점 보장) / 상점(전략적 선택) / 클리어 보상(방향성 결정)으로 역할 분담",
      "<strong>밸런싱 Case 1 — 경제 불균형</strong>: 초기 총 보상 1,350G로 1스탯 MAX(11,333G) 불가 → 비용 증가율 1.5배→1.35배, 기본 보상 50G→350G로 조정 (300G/+60G, 350G/+65G, 400G/+70G 세 값을 시도하여 최적값 선정) → 10건 테스트로 검증, 최종 오차 0.6%",
      "<strong>밸런싱 Case 2 — 무기 차별화 부재</strong>: 초기 4종 무기가 데미지(15~20)만 달라 '다 똑같다'는 피드백 → 데미지를 3~5로 하향하고 고유 부가효과(화상/슬로우/체인) 추가 → 15건 테스트로 선택 분포 확인 (삽30%/화염25%/얼음25%/번개20%, 편중 없음)",
      "<strong>밸런싱 Case 3 — 레벨 디자인</strong>: 지수적 난이도 증가(Wave 9에서 256배)로 후반 플레이 불가 → 선형 증가(+50%/wave, Wave 9에서 5배)로 전환 → 20건 테스트로 Wave 9 도달률 15%→70%, Wave 10 클리어율 0%→40% 확인"
    ],
    target: {
      who: "로그라이트 게임을 즐기고, 반복 플레이를 통한 점진적 성장을 좋아하는 플레이어",
      what: [
        "3중 성장 구조(레벨업/상점/클리어 보상)를 활용한 전략적 빌드 구성의 재미",
        "4종 무기(삽/화염/얼음/번개)의 차별화된 플레이 스타일 선택",
        "한정된 골드로 매 판 다른 빌드를 시도하는 전략적 선택의 재미",
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
        how: "4종 스탯(공격력/체력/이동속도/방어력) 업그레이드. 비용 증가율을 1.5배→1.35배로 조정하여 총 비용 11,333G→5,457G로 하향. 플레이마다 초기화하여 매 판 새로운 빌드 유도",
        what: "1개 스탯 MAX 비용 5,457G ≈ 총 보상 5,490G → 올인 vs 분산의 선택 압박. 스탯 올인·무기 올인·균형 빌드 모두 Wave 10 보스 클리어 가능하도록 검증"
      },
      {
        title: "보상 시스템",
        why: "초기 설계에서 총 보상 1,350G로 1스탯 MAX(11,333G) 불가 → '부족한 스탯을 보상으로 채우자니 무기가 어중간' 문제 발생. 클리어 보상만으로 1개 스탯 MAX가 가능해야 성장 체감이 명확하다는 가설 수립",
        how: "기본 보상 50G→350G, 웨이브당 증가 +25G→+65G로 상향. 3가지 수치 조합을 시도 (300G/+60G→총 4,980G 부족 | 350G/+65G→총 5,490G 적정 | 400G/+70G→총 6,390G 과잉)하여 최적값 선정",
        what: "Wave 1-9 총 보상 5,490G vs 1스탯 MAX 5,457G, 오차 0.6%(33G). 10건 테스트에서 9건 '성장이 체감된다' 피드백 확인"
      },
      {
        title: "특수 무기 시스템",
        why: "초기 4종 무기가 데미지(15~20)만 달라 '다 똑같아서 아무거나 골라도 됨'이라는 테스트 피드백 → 선택의 의미 부재로 빌드 다양성 목표 실패",
        how: "데미지를 3~5로 대폭 하향하고 고유 부가효과를 추가하여 역할 차별화. 레벨 스케일링도 분리 (삽: +3/Lv, 나머지: +1/Lv). 시각 피드백(화상 주황 점멸, 슬로우 파란 지속, 체인 노란 점멸) 추가",
        what: "15건 테스트에서 무기 선택 분포 삽30%/화염25%/얼음25%/번개20%로 편중 없음 확인. '삽은 순수 화력, 얼음은 거리 확보' 등 역할 인식 형성"
      },
      {
        title: "레벨 디자인",
        why: "초기 적 스탯이 지수적 증가(2^(wave-1))하여 Wave 5에서 16배, Wave 9에서 256배 → 플레이어 성장이 따라가지 못해 Wave 7 이후 사실상 플레이 불가",
        how: "선형 증가(+50%/wave)로 전환하여 Wave 5에서 3배, Wave 9에서 5배로 완화. 몬스터 3종(Wave 1/4/7 등장)으로 점진적 다양성 확보",
        what: "20건 테스트에서 Wave 9 도달률 15%→70%, Wave 10 클리어율 0%→40% 달성. 최종 평균 플레이타임 5.5분으로 목표(5~6분) 충족"
      },
      {
        title: "보스 시스템",
        why: "일반 웨이브와 차별화된 긴장감, 보스 처치 시 성취감 제공. Wave 10 최종 보스로 게임의 명확한 목표 설정",
        how: "돌진 패턴+십자 탄막 패턴 설계. 체력 200/공격 15/방어 8/이동속도 1.2로 '느리지만 강력한' 컨셉. 시간 제한 제거하여 보스 처치를 필수 조건화",
        what: "사전 동작을 보고 회피하는 능동적 플레이 패턴 관찰. Wave 10 클리어율 40%로 적정 난이도 달성"
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

  slaythespire: {
    title: "Slay the Spire — 코스트 체계 역기획서",
    tagline: "공격 카드 전체의 코스트 효율을 기준선 대비 분석, 비용 구조를 5유형으로 분류",
    modalImage: "./assets/images/SlaytheSpire.png",
    info: {
      platform: "PC, 모바일",
      engine: "-",
      role: "시스템 분석 & 문서화",
      team: "1인",
      period: "2026.01.21 — 2026.02.16",
      note: "레퍼런스 분석"
    },
    overview: "Slay the Spire 아이언클래드의 공격 카드 전체를 대상으로, 코스트 1당 기대 대미지를 기준선으로 설정한 뒤 모든 카드의 코스트 효율을 분석했습니다. 초과·미달 대미지의 비용-보정 구조를 도출하고, 부가 효과의 실질 대미지 기여를 검증하여 비용 구조를 5유형으로 분류했습니다.",
    concept: [
      "<strong>분석 프레임워크 구축</strong>: 코스트 1당 기대 대미지를 기준선으로 설정하고, 전체 공격 카드의 효율을 정량 비교",
      "<strong>비용 구조 5유형 분류</strong>: 초과 대미지형, 미달+보정형, 조건부 효율형, 시너지 의존형, 특수 메커니즘형으로 카드 비용 체계를 유형화",
      "<strong>불균형 발견 → 개선안</strong>: HP 소모 유형의 리스크-리턴 불균형을 발견하고, 이를 해결하는 신규 카드를 직접 설계 및 검증"
    ],
    systems: [
      {
        title: "코스트 효율 분석 프레임워크",
        why: "카드 밸런싱을 감각이 아닌 정량적 기준으로 평가하기 위해, 모든 카드를 동일 척도로 비교할 수 있는 기준선이 필요",
        how: "코스트 1당 기대 대미지를 기준선으로 설정 → 각 카드의 실제 효율을 기준선 대비 %로 산출 → 초과/미달 원인을 부가 효과·조건·시너지로 분해",
        what: "전체 공격 카드를 5가지 비용 유형으로 분류 완료. 유형별 설계 패턴과 밸런싱 의도를 문서화"
      },
      {
        title: "HP 소모 유형 불균형 분석 및 개선",
        why: "HP를 소모하는 카드군의 리스크-리턴 구조가 다른 유형 대비 불균형 — 리스크는 높지만 리턴이 비례하지 않는 카드가 다수 존재",
        how: "HP 소모 카드의 실질 효율을 산출하여 리스크 대비 리턴 비율을 정량화 → 불균형 구간 식별 → 해당 구간을 보완하는 신규 카드 설계",
        what: "신규 카드의 코스트 효율이 기준선 내에 수렴하는지 검증 완료. 분석 → 문제 발견 → 설계 → 검증의 전 과정을 문서화"
      }
    ],
    externalLinks: [
      {
        title: "역기획서 전문 (PDF)",
        url: "./assets/docs/SlayTheSpire_코스트 체계 역기획서_박진.pdf",
        icon: "document-text-outline"
      }
    ]
  },

  stellarblade: {
    title: "Stellar Blade — 방어 액션 시스템 역기획서",
    tagline: "4종 방어 액션의 리스크-리턴 구조 분석, 세키로·P의 거짓과 비교",
    modalImage: "./assets/images/StellarBlade.png",
    info: {
      platform: "PS5",
      engine: "-",
      role: "시스템 분석 & 문서화",
      team: "1인",
      period: "2025.12.03 — 2026.01.02",
      note: "레퍼런스 분석"
    },
    overview: "Stellar Blade의 4종 방어 액션(회피, 패링, 리펄스, 블링크)의 설계 의도를 리스크-리턴 구조로 분석하고, 세키로·P의 거짓과 비교하여 Stellar Blade만의 설계 차별점을 도출했습니다.",
    concept: [
      "<strong>리스크-리턴 분석</strong>: 4종 방어 액션의 입력 타이밍 난이도(리스크)와 보상 크기(리턴)를 정량 비교하여 설계 의도 도출",
      "<strong>3작품 비교 분석</strong>: 세키로(체간 시스템), P의 거짓(리전 아츠), Stellar Blade(블링크/리펄스)의 방어 시스템 구조를 비교하여 각 게임의 설계 철학 차이 분석",
      "<strong>문제 발견 → 개선안 제시</strong>: 다수전 피격 문제에 대한 슬로우 개선안, 스킬트리 학습 순서 왜곡에 대한 UI 개선안을 제안"
    ],
    systems: [
      {
        title: "방어 액션 리스크-리턴 분석",
        why: "4종 방어 액션이 각각 어떤 상황에서 최적인지, 플레이어에게 선택의 의미를 주는 구조인지 검증하기 위함",
        how: "각 액션의 입력 타이밍 허용 범위(리스크)와 성공 시 보상(리턴: 대미지, 무적 프레임, 에너지 회복)을 측정 → 리스크-리턴 매트릭스 작성",
        what: "회피(저리스크-저리턴)부터 리펄스(고리스크-고리턴)까지 단계적 설계를 확인. 색상 시스템(보라/금색)이 판단 부담을 축소하는 구조 도출"
      },
      {
        title: "비교 분석 및 개선안",
        why: "단일 게임 분석만으로는 '왜 이렇게 설계했는가'의 깊이가 부족. 유사 장르의 다른 설계 선택과 비교해야 각 선택의 트레이드오프가 드러남",
        how: "세키로의 체간/패링 중심 설계, P의 거짓의 리전 아츠/무기 분리 설계와 비교 → Stellar Blade의 에너지 2종 분리가 빌드 다양성에 기여하는 구조 분석",
        what: "다수전 피격 문제(피격 경직 중 추가 피격) → 슬로우 연출 개선안 제시. 스킬트리 학습 순서 왜곡(핵심 스킬이 후반에 배치) → UI 동선 개선안 제시"
      }
    ],
    externalLinks: [
      {
        title: "역기획서 전문 (PDF)",
        url: "./assets/docs/스텔라블레이드_역기획서_박진.pdf",
        icon: "document-text-outline"
      }
    ]
  },

  babysanta: {
    title: "Baby Santa Run",
    tagline: "웹툰 IP를 캐주얼 게임으로 — 단순 조작과 수집 목표 설계",
    modalImage: "./assets/images/modal-babysanta.png",
    info: {
      platform: "모바일, PC",
      engine: "Unreal Engine 5",
      role: "웹툰 시놉시스 기획 & 데모 게임 기획 & 개발",
      team: "4인",
      period: "2024.11.01 — 2024.12.19",
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
        why: "웹툰 감상 직후 플레이하는 상황에서 복잡한 조작은 진입 장벽. 조작 가짓수를 최소화하여 플레이 판단에 집중",
        how: "기본 상태를 '달리는 중'으로 설정. 방향 조정 + 점프만으로 플레이 가능",
        what: "PC: W,A,S,D + 점프(SPACE) / 모바일: 가상 패드 + 점프 버튼. 조작 2가지로 통일"
      },
      {
        title: "선물 상자 수집 시스템",
        why: "러닝 게임에서 '달리는 행위' 자체는 목표가 아닌 플레이 방식. 부가적인 클리어 목표가 필요",
        how: "맵 곳곳에 선물 상자 배치. 일부는 메인 루트, 일부는 우회 루트에 숨겨 탐색 유도. 접촉 즉시 획득 처리",
        what: "화면 우측 상단에 실시간 수집량 표시로 진행도를 직관적으로 피드백"
      },
      {
        title: "TP(Teleport Point) 리스폰 시스템",
        why: "맵 50% 이상 진행 후 추락하면 처음부터 재시작 → 캐주얼 유저 이탈 위험. 시작점으로 돌려보내는 것도 반복 피로 유발. '가장 가까운 지점으로 즉시 복귀'가 피로감과 진행도 보존의 균형점",
        how: "맵 외곽 바닥면에 트리거 박스 배치. 접촉 시 가장 가까운 TP 지점으로 자동 이동",
        what: "'추락 = 게임 오버'가 아닌 '추락 = 잠깐 뒤로'로 플레이 흐름 유지"
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
      engine: "Unreal Engine 5",
      role: "시스템 기획 & 서브 PM",
      team: "6인 (기획 2인 + 개발 3인 + 아트 1인)",
      period: "2025.03.17 — 2025.08.20",
      note: "NCA 장기과정 2기 쇼케이스 전시"
    },
    overview: "'보는 것 위주라 VR 장점이 없다'는 초기 피드백을 받고, 상호작용 5종을 기획·제안하여 모두 반영. '보는 VR'에서 '참여하는 VR'로 경험을 전환한 몰입형 VR 힐링 게임입니다.",
    concept: [
      "초기 피드백 '상호작용 부족' → <strong>VR 상호작용 5종 기획·제안, 모두 반영</strong>",
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
        why: "단순히 보고 지나가는 것이 아니라, 플레이어의 행동이 게임 진행의 '주체'가 되도록 하기 위함. 퍼즐 난이도가 높으면 힐링 톤이 깨지므로 '성공이 보장된 퍼즐'로 설계",
        how: "버스 카드 조각을 시야 높이에, 목적지와 근접하게 배치. 판정 범위를 관대하게 설정하여 조작 실패로 몰입이 깨지지 않도록",
        what: "카드가 표지판에 닿으면 자동으로 퍼즐 완성. '내가 했다'는 성취감은 주되, 실패 가능성은 제거"
      },
      {
        title: "사진 업로드 & 입체화 시스템",
        why: "엔딩에서 '세상이 색을 되찾았다'는 감각이 진짜로 느껴지려면, 플레이어 본인의 요소가 게임 안에 존재해야 함. 고정된 이미지가 아닌 '나의 사진'이 적용됐을 때의 감정적 몰입도 향상 가능",
        how: "AI 뎁스 분석으로 플레이어의 사진을 3단계 레이어(전경/중경/배경)로 분리 후 입체화",
        what: "플레이어가 업로드한 사진이 입체 홀로그램 카드로 변환되어 게임 속에 반영. 개인화된 엔딩 경험 제공"
      }
    ],
    teamwork: [
      {
        title: "상호작용 기획 추가",
        problem: "\"상호작용이 적고 보는 것 위주라 VR 장점이 없다\"는 피드백",
        solution: "VR 레퍼런스 분석 → 상호작용 5개 기획 및 제안 (버스카드 퍼즐, 창문 낙서, 버스 태그, 사진 업로드, 사진 감상)",
        result: "제안한 5개 모두 반영, \"보는 VR\" → \"참여하는 VR\"로 전환"
      },
      {
        title: "기획-아트 리소스 조율",
        problem: "기획(맵 7개) vs 아트(일정상 불가) 충돌. 원 기획 플레이 타임 20분 초과, 목표는 10분 이내",
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

  puzzle: {
    title: "슬라이드 퍼즐 게임",
    tagline: "풀 수 없는 퍼즐 문제를 역생성 알고리즘으로 구조적 해결",
    modalImage: "./assets/images/modal-puzzle.png",
    info: {
      platform: "PC, 모바일",
      engine: "Claude Code, Cursor",
      role: "시스템 기획 & AI 바이브 코딩",
      team: "1인",
      period: "2025.10.03 — 2025.10.06",
      note: "개인 프로젝트"
    },
    overview: "랜덤 셔플로 퍼즐을 생성하면 50% 확률로 '풀 수 없는 퍼즐'이 만들어지는 구조적 결함을 발견하고, 역생성 알고리즘으로 해결한 뒤 난이도 곡선까지 설계한 프로젝트입니다.",
    concept: [
      "<strong>문제 발견 → 구조적 해결</strong>: 랜덤 셔플의 50% 해결 불가 문제를 역생성 알고리즘(완성→역섞기)으로 근본 해결, 100% 해결 가능 보장",
      "<strong>난이도 곡선 설계</strong>: 역이동 횟수를 난이도 파라미터로 활용 — Easy(20회)는 패턴 인지 가능, Normal(50회)은 중간 탐색, Hard(100회)는 초기 배치에서 완성 상태를 추론하기 어려운 수준으로 단계별 체감 차이를 설계",
      "<strong>유저 경험 흐름</strong>: 난이도 선택 → 퍼즐 풀기 → 이동 횟수·시간 피드백 → 더 적은 이동으로 재도전하는 자기 경쟁 루프 구성"
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
        how: "발상 전환: 섞은 뒤 풀 수 있는지 검증하는 대신, 완성 상태에서 유효한 이동만 역으로 수행하여 항상 해결 가능한 배치 생성",
        what: "생성 로직 자체가 난이도 제어 파라미터를 겸함 — 역이동 횟수 하나로 퍼즐 생성과 난이도 설계를 통합"
      },
      {
        title: "난이도 시스템",
        why: "단일 난이도로는 초보자에게 좌절감, 숙련자에게 지루함. 역생성 횟수를 조절하면 같은 알고리즘으로 체감 난이도를 분리할 수 있음",
        how: "Easy 20회(패턴 인지 가능) / Normal 50회(중간 탐색 필요) / Hard 100회(완성 상태 추론 어려움)로 3단계 설계. 각 단계의 역이동 횟수는 플레이 테스트로 체감 차이가 명확한 구간을 선정",
        what: "난이도별 평균 풀이 시간에 유의미한 차이 발생. 같은 메커니즘으로 캐주얼~하드코어 유저를 모두 수용"
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
                <span class="teamwork-label">문제</span>
                <p class="teamwork-text">${episode.problem}</p>
              </div>
              <div class="teamwork-step">
                <span class="teamwork-label">해결</span>
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

  // 웹소설의 경우 엔진/도구 행 제거
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

