# Frontend Fundamentals 모의고사

## Getting started

```sh
yarn dev
```

🏗️ 디렉토리 구조
```
src/
├── api/              # API 통신 레이어
├── components/       # UI 컴포넌트
│   ├── savings/     # 적금 관련 도메인 컴포넌트
│   └── ui/          # 재사용 가능한 UI 컴포넌트
├── constants/        # 상수 정의
├── pages/           # 페이지 컴포넌트
├── store/           # 전역 상태 관리 (Zustand)
└── utils/           # 유틸리티 함수

```
🎯 설계 

1. 레이어드 아키텍처

- API Layer: API 호출 및 데이터 검증 (Zod 스키마) 
- Store Layer: 전역 상태 관리 (Zustand) 
- Component Layer: UI 렌더링 및 사용자 인터랙션 
- Utils Layer: 비즈니스 로직 (적금 계산)


2. 컴포넌트 구조
```
   SavingsCalculatorPage (페이지)
   ├── SavingsUserInputLayout (사용자 입력)
   │   ├── Input (목표금액, 월납입액)
   │   └── Select (저축기간)
   └── SavingsResultLayout (결과 표시)
   ├── TabComponent (탭 전환)
   ├── SavingProducts (적금 상품 목록)
   └── SavingResults (계산 결과)
   ├── SavingExpectedResults (예상 수익)
   └── SavingRecommendResults (추천 상품)
```

3. 데이터 흐름

```
1. 사용자 입력 → useSavingsStore (Zustand)
2. API 호출 → React Query (캐싱)
3. Store + API 데이터 → 계산 로직 (utils)
4. 계산 결과 → UI 렌더링

```
