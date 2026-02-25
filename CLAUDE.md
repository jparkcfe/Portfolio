# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 프로젝트 개요

게임 시스템 기획자 포트폴리오 웹사이트입니다. 빌드 도구나 패키지 매니저 없이 순수 HTML/CSS/JavaScript로 구성된 정적 사이트입니다. CSS는 @codewithsadee의 vCard 템플릿을 기반으로 커스터마이징한 것입니다.

## 프로젝트 구조

```
portfolio-deploy/
├── index.html          # 메인 HTML (전체 콘텐츠 포함)
├── vercel.json         # Vercel 배포 설정 (보안 헤더)
└── assets/
    ├── css/style.css   # 전체 스타일시트 (CSS 변수 기반 다크 테마)
    ├── js/script.js    # UI 인터랙션 및 프로젝트 모달 데이터
    ├── images/         # 이미지 리소스
    ├── docs/           # PDF/Excel 문서 (역기획서, 기획서 등)
    └── webgame/        # 독립형 HTML 미니게임 (메인 사이트 CSS/JS와 무관)
```

## 개발 방법

빌드 과정이 없습니다. 파일을 직접 수정 후 브라우저에서 `index.html`을 열어 확인하면 됩니다.

로컬 서버가 필요한 경우:
```bash
python -m http.server 8000
# 또는
npx serve .
```

배포: Vercel에 연결되어 있으며, `git push` 시 자동 배포됩니다.

## 아키텍처

### 페이지 구조

단일 페이지 애플리케이션(SPA) 패턴을 사용합니다. 네비게이션 탭 클릭 시 `data-page` 속성으로 페이지를 전환합니다.

- **About** (`data-page="about"`): 자기소개, 프로젝트 경험(Main/Sub), 교육, 사용 툴(아이콘+숙련도 통합)
- **Portfolio** (`data-page="portfolio"`): 프로젝트 갤러리 (카테고리 필터 지원, Analysis 카테고리 포함)

페이지 전환 로직은 `script.js`의 `navigationLinks` 이벤트 핸들러에서 처리됩니다. `data-nav-link` 버튼의 `innerHTML`(소문자 변환)과 `data-page` 속성을 비교합니다.

새 페이지 추가 시:
1. `index.html`에 `<article class="페이지클래스" data-page="페이지명">` 추가
2. `navbar-list`에 `<button class="navbar-link" data-nav-link>페이지명</button>` 추가
3. 버튼의 `innerHTML`(소문자 변환)과 `data-page` 속성 값이 일치해야 함 (예: 버튼 텍스트 "게임 분석" → `data-page="게임 분석"`)

### 프로젝트 모달 시스템

`script.js`의 `projectData` 객체에 각 프로젝트 상세 정보가 정의되어 있습니다. 프로젝트 클릭 시 `generateModalContent()` 함수가 HTML을 동적으로 생성합니다.

현재 등록된 프로젝트 키: `roguelike`, `babysanta`, `maeil`, `kanji`, `apple`, `puzzle`, `novel`

프로젝트 버튼 클릭은 **이벤트 위임(Event Delegation)** 패턴으로 처리됩니다. `document`에 한 번만 리스너를 등록하므로, 새 프로젝트 추가 시 별도 이벤트 바인딩이 필요 없습니다.

새 프로젝트 추가 시:
1. `projectData` 객체에 프로젝트 키와 데이터 추가
2. `index.html`에 프로젝트 카드 추가 (`data-project="키"` 속성 필수)
3. 해당 이미지 파일을 `assets/images/`에 추가
4. About 페이지 타임라인에도 항목 추가 (선택)

`projectData` 객체 구조:
```javascript
{
  title: "프로젝트명",
  tagline: "한 줄 설명 (따옴표로 감싸서 표시됨)",
  modalImage: "./assets/images/modal-{프로젝트키}.png",
  info: {
    platform: "PC, 모바일 등",
    engine: "Unity, UE5 등 (값이 '-'이면 테이블에서 해당 행 숨김)",
    role: "담당 역할",
    team: "팀 구성 (예: 4인)",
    period: "기간",
    note: "비고"
  },
  overviewTitle: "게임 개요",  // 선택 (기본값: '게임 개요', 웹소설은 '소설 개요')
  overview: "프로젝트 설명 텍스트",
  concept: ["컨셉 키워드 1", "컨셉 키워드 2"],  // <strong> 태그 사용 가능
  target: {  // 선택
    who: "타겟 유저",
    what: ["핵심 재미 1", "핵심 재미 2"],  // 문자열 또는 배열
    why: "이유",  // 선택
    how: "핵심 공식"
  },
  systems: [{  // 선택
    title: "시스템명",
    why: "설계 의도",
    how: "구현 방법",
    what: "결과물"
  }],
  teamwork: [{  // 선택
    title: "에피소드 제목",
    problem: "문제 상황",
    solution: "해결 과정",
    result: "결과"
  }],
  videos: [{ title: "영상 제목", url: "YouTube URL" }],  // 선택
  externalLink: { title: "링크 제목", url: "URL" },  // 단일 링크 (선택)
  externalLinks: [{  // 다중 링크 (선택, 모달 이미지 하단에 표시)
    title: "링크 제목",
    url: "URL",
    icon: "ionicons 아이콘명",  // 예: "document-text-outline"
    isDownload: false  // true면 다운로드 링크로 동작
  }]
}
```

### 이미지 네이밍 규칙

- 프로젝트 썸네일: `project-{프로젝트키}.png`
- 모달 이미지: `modal-{프로젝트키}.png`
- 툴 아이콘: `tool-{툴명}.svg` (Word, Excel, PowerPoint만 해당) 또는 개별 파일명 (`HD Unreal Engine Logo.png`, `UnityIcon.png`, `cursor-ai-code-icon.png`, `icons8-클로드-아이-100.png`, `chatgpt-codex-icon.png`, `google-antigravity-logo-icon.png`)

### 포트폴리오 필터 시스템

포트폴리오 페이지의 카테고리 필터는 두 가지 방식으로 작동합니다:
- 모바일: `filter-select-box` 드롭다운 사용
- 데스크탑(768px 이상): `filter-list` 버튼 리스트 사용

`data-filter-item`의 `data-category` 속성 값으로 필터링됩니다.

사용 가능한 카테고리: `all`, `unity+ai`, `unreal engine`, `ai prototyping`, `scenario`, `analysis`

새 카테고리 추가 시 `filter-list`(데스크탑)와 `filter-select-box`(모바일) 양쪽 모두 항목을 추가해야 합니다.

### About 페이지 섹션 클래스

About 페이지의 주요 섹션들 (순서대로):
- `section.about-text`: 자기소개 및 역할 태그
- `section.timeline` (Project Experience): 프로젝트 타임라인 (플랫 리스트)
- `section.timeline` (Education & Experience): 학력/경력 타임라인
- `section.tools`: 사용 툴 아이콘 + 숙련도 통합 그리드

Project Experience 항목 (순서대로):
- 로그라이트 게임 (모달 링크)
- Slay the Spire 역기획서 (PDF 직접 링크)
- Stellar Blade 역기획서 (PDF 직접 링크)
- 매일 보관함 (모달 링크)

통합 툴 섹션 구조:
- `div.tools-grid.content-card`: 전체 컨테이너
- `h4.tools-category-label`: 카테고리 구분 헤더 (게임 엔진, AI 도구, 문서)
- `ul.tools-list > li.tools-item`: 아이콘 + 이름 + `.skill-level` 스팬으로 상/중/하 표시
  - `.level-high` (상), `.level-mid` (중), `.level-low` (하)
- UE5 항목에 `data-video-btn` + `data-video-url` (비디오 라이트박스 연동)

타임라인 항목 유형:
- 모달 항목: `li.timeline-item` + `a.timeline-project-link[data-project-btn][data-project="키"]`
- PDF 링크 항목: `li.timeline-item` + `a.timeline-project-link[href="PDF URL"][target="_blank"]` (data-project-btn 없음)

### Portfolio 페이지 섹션 클래스

Portfolio 페이지(`data-page="portfolio"`)의 섹션들:
- `section.projects`: 프로젝트 갤러리 컨테이너
- `ul.filter-list`: 데스크탑용 카테고리 필터 버튼
- `div.filter-select-box`: 모바일용 드롭다운 필터
- `ul.project-list`: 프로젝트 카드 그리드

### 비디오 라이트박스

모달 외부에서 YouTube 영상을 전체 화면 오버레이로 재생하는 시스템. 현재 About 페이지의 UE5 스킬 항목에서 사용.

- `data-video-btn` + `data-video-url="YouTube URL"` 속성을 가진 요소 클릭 시 라이트박스 열림
- ESC 키 또는 오버레이/닫기 버튼 클릭으로 닫힘
- HTML 구조: `div.video-lightbox[data-video-lightbox]` (index.html의 Portfolio 섹션 뒤에 위치)

### 스크롤 FAB

페이지 하단 우측에 고정된 플로팅 버튼 그룹. 300px 이상 스크롤 시 표시됨.

- `div.scroll-fab-group`: 컨테이너 (`.visible` 클래스로 표시/숨김)
- `button[data-scroll-top]`: 맨 위로 스크롤
- `button[data-scroll-bottom]`: 맨 아래로 스크롤
- HTML 위치: `</main>` 바로 뒤 (main 요소 외부)

### 모달 섹션 클래스

프로젝트 모달(`div.project-modal`)의 주요 구성요소:
- `div.modal-header`: 제목과 태그라인
- `div.modal-image-container`: 이미지 + 외부 링크 버튼
- `table.modal-info-table`: 프로젝트 정보 테이블
- `div.modal-section`: 개요, 컨셉, 3W1H 등 각 섹션
- `div.modal-systems`: 핵심 시스템 아코디언 (`<details>` 사용)
- `div.modal-teamwork`: 팀 협업 사례 아코디언
- `div.modal-video`: YouTube 임베드

### 웹게임 (assets/webgame/)

각 웹게임은 **독립형 HTML 파일**로, 메인 사이트의 `style.css`나 `script.js`와 무관합니다. CSS/JS가 각 HTML 파일 내에 인라인으로 포함되어 있습니다.
- `kanji-quiz.html`: 한자 낱말 퀴즈
- `apple-harvest.html`: 사과 수확 게임
- `slide-puzzle-game.html`: 슬라이드 퍼즐 게임

모달에서 `externalLinks`의 URL로 연결됩니다.

### CSS 테마 및 반응형

CSS 커스텀 프로퍼티(`:root` 변수)로 다크 테마 색상을 관리합니다. 색상 변경 시 `style.css` 상단의 `:root` 블록을 수정합니다.

미디어 쿼리 브레이크포인트:
- 450px, 580px, 768px, 1024px, 1250px
- 1250px 이상: 사이드바가 왼쪽에 고정되는 2컬럼 레이아웃
- 그 이하: 단일 컬럼 레이아웃

### 외부 의존성

- Google Fonts (Poppins)
- Ionicons 5.5.2 (아이콘) — 이름 확인: https://ionic.io/ionicons

## 주요 JavaScript 함수

`script.js`의 핵심 함수들:
- `elementToggleFunc(elem)`: CSS 클래스 "active" 토글
- `filterFunc(selectedValue)`: 포트폴리오 카테고리 필터링
- `generateModalContent(project)`: projectData 기반 모달 HTML 생성
- `openProjectModal(projectId)` / `closeProjectModal()`: 모달 열기/닫기
- `getYouTubeId(url)`: YouTube URL에서 영상 ID 추출
- `openVideoLightbox(youtubeUrl)` / `closeVideoLightbox()`: 비디오 라이트박스 열기/닫기

## 주의사항

- 프로젝트 키는 영문 소문자만 사용 (예: `roguelike`, `babysanta`)
- `data-project` 속성값과 `projectData` 객체 키가 정확히 일치해야 모달이 열림
- 페이지 전환에서 `innerHTML.toLowerCase()`와 `data-page` 값을 비교하므로, 페이지명은 버튼 텍스트와 정확히 일치해야 함
- `vercel.json`의 보안 헤더(X-Frame-Options: DENY 등)가 iframe 임베딩을 차단하므로, 외부 사이트에서 이 사이트를 iframe으로 불러올 수 없음
- Portfolio의 Analysis 카테고리 카드는 PDF 직접 링크(`href` + `target="_blank"`)이며, `data-project-btn`이 없으므로 모달이 열리지 않음
