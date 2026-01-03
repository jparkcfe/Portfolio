# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 프로젝트 개요

게임 시스템 기획자 포트폴리오 웹사이트입니다. 빌드 도구나 패키지 매니저 없이 순수 HTML/CSS/JavaScript로 구성된 정적 사이트입니다.

## 프로젝트 구조

```
portfolio-deploy/
├── index.html          # 메인 HTML (전체 콘텐츠 포함)
└── assets/
    ├── css/style.css   # 전체 스타일시트
    ├── js/script.js    # UI 인터랙션 및 프로젝트 모달 데이터
    ├── images/         # 이미지 리소스
    └── docs/           # PDF 문서 (역기획서 등)
```

## 개발 방법

빌드 과정이 없습니다. 파일을 직접 수정 후 브라우저에서 `index.html`을 열어 확인하면 됩니다.

로컬 서버가 필요한 경우:
```bash
python -m http.server 8000
# 또는
npx serve .
```

## 아키텍처

### 페이지 구조

단일 페이지 애플리케이션(SPA) 패턴을 사용합니다. 네비게이션 탭 클릭 시 `data-page` 속성으로 페이지를 전환합니다.

- **About**: 자기소개, 서비스, 교육, 프로젝트 경력, 툴 숙련도
- **Portfolio**: 프로젝트 갤러리 (카테고리 필터 지원)
- **게임 분석**: 역기획서 문서 링크

페이지 전환 로직은 `script.js`의 `navigationLinks` 이벤트 핸들러에서 처리됩니다. `data-nav-link` 버튼의 텍스트와 `data-page` 속성을 매칭합니다.

### 프로젝트 모달 시스템

`script.js`의 `projectData` 객체에 각 프로젝트 상세 정보가 정의되어 있습니다. 프로젝트 클릭 시 `generateModalContent()` 함수가 HTML을 동적으로 생성합니다.

새 프로젝트 추가 시:
1. `projectData` 객체에 프로젝트 키와 데이터 추가
2. `index.html`에 프로젝트 카드 추가 (`data-project="키"` 속성 필수)
3. 해당 이미지 파일을 `assets/images/`에 추가

`projectData` 객체 구조:
- `title`, `tagline`, `modalImage`: 기본 정보
- `info`: 플랫폼, 엔진, 역할, 팀 구성, 기간, 비고
- `overview`, `concept`: 프로젝트 설명
- `target`: 타겟 유저 분석 (who, what, why, how)
- `systems`: 핵심 시스템 설명 배열 (title, why, how, what)
- `teamwork`: 팀 협업 사례 배열 (title, problem, solution, result)
- `videos`: YouTube 영상 배열 (title, url)
- `externalLinks`: 외부 링크 배열 (title, url, icon, isDownload)

### 포트폴리오 필터 시스템

포트폴리오 페이지의 카테고리 필터는 두 가지 방식으로 작동합니다:
- 모바일: `filter-select-box` 드롭다운 사용
- 데스크탑(768px 이상): `filter-list` 버튼 리스트 사용

`data-filter-item`의 `data-category` 속성 값으로 필터링됩니다.

### 반응형 디자인

CSS 미디어 쿼리로 반응형 레이아웃을 구현합니다:
- 450px, 580px, 768px, 1024px, 1250px 브레이크포인트
- 1250px 이상: 사이드바가 왼쪽에 고정되는 2컬럼 레이아웃
- 그 이하: 단일 컬럼 레이아웃

### 외부 의존성

- Google Fonts (Poppins)
- Ionicons 5.5.2 (아이콘)
