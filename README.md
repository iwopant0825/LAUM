# LAUM - 선린인터넷고등학교 일러스트 동아리

> Learning Art, Unleash Me.  
> 예술을 배우며 나를 펼치다

## 🎨 프로젝트 소개

LAUM(라움)은 선린인터넷고등학교 콘텐츠디자인과의 일러스트 동아리 웹사이트입니다. 창의적인 아이디어와 감성을 자유롭게 표현하는 학생들의 공간으로, 일러스트와 만화 창작 활동을 통해 예술적 역량을 키워나가는 동아리입니다.

## ✨ 주요 기능

### 🎯 핵심 섹션
- **홈페이지**: 동아리 소개 및 작품 갤러리
- **소개**: 동아리 역사와 가치관
- **커리큘럼**: 체계적인 교육 과정 안내
- **수상실적**: 동아리 부원들의 성과
- **지원하기**: 신입 부원 모집

### 🚀 기술적 특징
- **반응형 디자인**: 모든 디바이스에서 최적화된 경험
- **부드러운 애니메이션**: Framer Motion을 활용한 인터랙티브 UI
- **현대적인 디자인**: Styled Components를 사용한 모던 스타일링
- **접근성 최적화**: 키보드 네비게이션 및 스크린 리더 지원
- **SEO 최적화**: 검색 엔진 최적화 및 소셜 미디어 최적화

## 🛠 기술 스택

### Frontend
- **React 19** - 사용자 인터페이스 구축
- **Vite** - 빠른 개발 환경
- **Styled Components** - CSS-in-JS 스타일링
- **Framer Motion** - 부드러운 애니메이션 및 전환 효과

### 디자인 시스템
- **Color Palette**: 
  - Primary: `#3F6C51` (메인 그린)
  - Accent: `#85C8A0` (라이트 그린)
  - Background: `#FAFCFB` (연한 배경)
- **Typography**: Pretendard 폰트 패밀리
- **Layout**: Flexbox 및 Grid 레이아웃

## 🎨 디자인 컨셉

### 색상 철학
- **3F6C51 (메인 컬러)**: 자연스러움과 성장을 상징하는 깊은 그린
- **심플한 디자인**: 과도한 장식보다는 깔끔하고 직관적인 UI
- **일러스트 중심**: 동아리의 정체성을 반영한 아트워크 강조

### UX/UI 원칙
- **사용자 중심**: 직관적이고 접근하기 쉬운 인터페이스
- **일관성**: 모든 페이지에서 통일된 디자인 언어
- **성능**: 빠른 로딩과 부드러운 인터랙션

## 📱 반응형 디자인

### 브레이크포인트
- **Desktop**: 1200px 이상
- **Tablet**: 768px - 1199px
- **Mobile**: 767px 이하

### 모바일 최적화
- 터치 친화적인 인터페이스
- 최적화된 이미지 로딩
- 모바일 네비게이션 메뉴

## 🚀 성능 최적화

### 이미지 최적화
- 레이지 로딩 구현
- WebP 포맷 지원
- 반응형 이미지 제공

### 코드 최적화
- Tree Shaking으로 번들 크기 최소화
- 코드 스플리팅
- 캐싱 전략

## 📊 SEO 최적화

### 메타 데이터
- Open Graph 태그
- Twitter Card 지원
- 구조화된 데이터 (JSON-LD)

### 접근성
- ARIA 레이블
- 키보드 네비게이션
- 스크린 리더 지원

## 🎯 프로젝트 구조

```
src/
├── components/          # 재사용 가능한 컴포넌트
│   ├── Header.jsx      # 헤더 네비게이션
│   ├── Symbols.jsx     # 아이콘 및 심볼
│   └── ScrollEffects.jsx # 스크롤 관련 효과
├── pages/              # 페이지 컴포넌트
│   ├── Home.jsx        # 홈페이지
│   ├── Introduce.jsx   # 소개 페이지
│   ├── Curriculum.jsx  # 커리큘럼 페이지
│   ├── Prize.jsx       # 수상실적 페이지
│   └── Footer.jsx      # 푸터
├── Svgs/               # SVG 컴포넌트
├── utils/              # 유틸리티 함수
└── styles/             # 전역 스타일
```

## 🔧 개발 환경 설정

### 요구사항
- Node.js 18.0.0 이상
- npm 또는 yarn

### 설치 및 실행
```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 빌드
npm run build

# 빌드 미리보기
npm run preview
```

## 📄 라이선스

이 프로젝트는 LAUM 동아리의 소유입니다.  
© 2025 LAUM. All rights reserved.

## 👥 팀

### 개발
- **개발자**: 차호림
- **디자인**: LAUM 동아리 부원들

### 동아리 임원진
- **부장**: 이도경
- **부부장**: 이시은

## 📞 연락처

- **지원 문의**: [지원 폼](https://forms.gle/dL3ZLHxEbLMxQicL6)
- **동아리 문의**: LAUM 동아리 부원들에게 문의

---

*"예술을 배우며 나의 한계를 뛰어넘어라."*

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
"# LAUM" 
