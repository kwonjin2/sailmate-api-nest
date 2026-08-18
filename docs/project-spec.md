# 프로젝트 명세

## 제품 아이디어

`SailMate`의 실제 프론트엔드 레포 기준 제품명은 `완성도`이다. 실제 백엔드 레포는 `soyul9280/FESI13-backend`이며, Java 21과 Spring Boot로 구현되어 있다.

완성도는 스터디와 사이드 프로젝트를 끝까지 운영하기 위한 모임 관리 플랫폼이다. 사용자는 원하는 스터디/프로젝트 모임을 탐색하고 신청할 수 있고, 모임장은 신청자의 활동 에너지와 리뷰 정보를 보고 팀원을 승인하거나 거절할 수 있다. 모임이 시작되면 멤버들은 대시보드에서 주차별 Todo를 관리하고, 달성률을 확인하며, 필요하면 화상 회의로 실시간 소통한다. 모임 종료 후에는 상호 리뷰를 남기고, 리뷰 결과는 사용자의 활동 에너지에 반영된다.

이 NestJS 백엔드 학습 프로젝트는 기존 Spring Boot 백엔드를 그대로 복사하지 않는다. 실제 백엔드의 도메인, API 경로, 주요 비즈니스 규칙을 참고하되, NestJS로 다시 구현하면서 백엔드 기본기를 연습하는 것이 목적이다.

## 핵심 도메인

- 사용자: 회원가입, 로그인, 내 정보, 활동 에너지, 리뷰 요약.
- 모임: 스터디/프로젝트 생성, 목록 조회, 필터링, 상세 조회, 수정, 삭제.
- 카테고리: 개발, 어학, 독서, 자격증, 디자인 등 모임 분류.
- 신청: 사용자가 모임에 참여 신청하고, 모임장이 신청을 승인하거나 거절한다.
- 멤버십: 승인된 사용자가 모임 멤버가 되며, 모임장은 멤버를 관리한다.
- Todo: 모임 안에서 주차별 할 일을 만들고 완료 여부를 관리한다.
- 달성률: 개인별/주차별 Todo 완료율을 계산한다.
- 리뷰: 종료된 모임에서 함께한 멤버에게 리뷰를 남기고 활동 에너지에 반영한다.
- 리포트: 모임별 주차 달성률과 개인/팀 달성률 요약을 제공한다.
- 임시저장: 모임 생성 도중 작성 중인 내용을 저장하고 다시 불러온다.
- 좋아요: 관심 있는 모임을 즐겨찾기처럼 저장한다.
- 알림: 신청, 승인, 거절, 페널티 경고, 모임 시작/종료, 리뷰 요청, 콕 찌르기 알림을 제공한다.
- 실시간 회의: LiveKit 기반 화상 회의는 프론트 기능에 존재하지만, 백엔드 학습 초기에는 토큰 발급 정도만 후보로 둔다.

## 초기 API 후보

### 헬스 체크

- `GET /health`

### 인증

- `POST /api/v1/auth/register`
- `POST /api/v1/auth/login`
- `POST /api/v1/auth/:provider/callback`
- `POST /api/v1/auth/refresh`
- `POST /api/v1/auth/logout`
- `GET /api/v1/auth/check/email`
- `GET /api/v1/auth/check/nickname`

### 사용자

- `GET /api/v1/users/me`
- `PATCH /api/v1/users/me`
- `PATCH /api/v1/users/me/password`
- `DELETE /api/v1/users/me`
- `GET /api/v1/users/me/gatherings`
- `GET /api/v1/users/me/applications`
- `GET /api/v1/users/:userId`

### 모임

- `GET /api/v1/gatherings/categories`
- `GET /api/v1/gatherings/main`
- `GET /api/v1/gatherings`
- `GET /api/v1/gatherings/:gatheringId`
- `POST /api/v1/gatherings`
- `PUT /api/v1/gatherings/:gatheringId`
- `DELETE /api/v1/gatherings/:gatheringId`
- `GET /api/v1/gatherings/:gatheringId/application-status`

### 모임 임시저장

- `POST /api/v1/gatherings/drafts`
- `GET /api/v1/gatherings/drafts`
- `GET /api/v1/gatherings/drafts/:draftId`
- `PUT /api/v1/gatherings/drafts/:draftId`
- `DELETE /api/v1/gatherings/drafts/:draftId`

### 신청

- `POST /api/v1/gatherings/:gatheringId/applications`
- `GET /api/v1/gatherings/:gatheringId/applications`
- `PATCH /api/v1/gatherings/:gatheringId/applications/:applicationId`
- `DELETE /api/v1/gatherings/:gatheringId/applications/:applicationId`

### 멤버

- `GET /api/v1/gatherings/:gatheringId/members`
- `DELETE /api/v1/gatherings/:gatheringId/members/me`
- `DELETE /api/v1/gatherings/:gatheringId/members/:targetUserId`
- `POST /api/v1/gatherings/:gatheringId/members/:targetUserId/poke`

### Todo와 달성률

- `GET /api/v1/gatherings/:gatheringId/todos/me`
- `GET /api/v1/gatherings/:gatheringId/todos`
- `POST /api/v1/gatherings/:gatheringId/todos`
- `PATCH /api/v1/gatherings/:gatheringId/todos/:todoId`
- `DELETE /api/v1/gatherings/:gatheringId/todos/:todoId`
- `GET /api/v1/gatherings/:gatheringId/achievements`
- `GET /api/v1/gatherings/:gatheringId/achievements/ranking`
- `GET /api/v1/gatherings/:gatheringId/report`

### 리뷰

- `POST /api/v1/gatherings/:gatheringId/reviews`
- `GET /api/v1/users/:userId/reviews`

### 좋아요와 알림

- `POST /api/v1/gatherings/:gatheringId/likes`
- `DELETE /api/v1/gatherings/:gatheringId/likes`
- `GET /api/v1/notifications`
- `PATCH /api/v1/notifications/:notificationId/read`
- `POST /api/v1/fcm-tokens`

## 초기 데이터 모델 초안

```text
User
- id
- email
- passwordHash
- nickname
- profileImage
- reputationScore
- createdAt
- updatedAt

Category
- id
- name

Gathering
- id
- leaderId
- type
- title
- shortDescription
- description
- goal
- maxMembers
- recruitDeadline
- startDate
- endDate
- status
- createdAt
- updatedAt

GatheringCategory
- gatheringId
- categoryId

GatheringTag
- id
- gatheringId
- name

GatheringImage
- id
- gatheringId
- url
- displayOrder

WeeklyPlan
- id
- gatheringId
- week
- title
- startDate
- endDate
- details

Application
- id
- gatheringId
- applicantId
- personalGoal
- selfIntroduction
- status
- createdAt
- updatedAt

Membership
- id
- gatheringId
- userId
- role
- joinedAt

Todo
- id
- gatheringId
- userId
- week
- content
- isCompleted
- createdAt
- updatedAt

Review
- id
- gatheringId
- reviewerId
- revieweeId
- comment
- tags
- createdAt

Notification
- id
- userId
- type
- referenceType
- referenceId
- message
- isRead
- createdAt

FcmToken
- id
- userId
- token
- createdAt

GatheringDraft
- id
- userId
- title
- content
- weeklyGuideItems
- createdAt
- updatedAt

GatheringReport
- id
- gatheringId
- weeklyRates
- teamAchievementRate
- createdAt
```

## 8주 핵심 범위

8주 동안 모든 기능을 구현하지 않는다. 백엔드 기본기를 연습하기 위해 핵심 범위는 다음으로 제한한다.

- 회원가입과 로그인.
- JWT 기반 보호 API.
- 내 정보 조회.
- 모임 카테고리 조회.
- 모임 생성, 목록 조회, 상세 조회, 수정, 삭제.
- 모임 목록의 필터링, 정렬, 페이지네이션.
- 모임 참여 신청.
- 모임장의 신청 목록 조회, 승인, 거절.
- 신청 승인 시 정원 초과 방지.
- 내 신청 목록 조회와 신청 취소.
- 내 모임 목록 조회.
- 모임 멤버 목록 조회.
- 주차별 Todo 생성, 조회, 수정, 삭제.
- 개인 Todo 완료율 계산.
- 모임 상태 자동 전이의 최소 버전.
- 핵심 규칙에 대한 service unit test와 주요 API e2e test.

처음부터 모든 도메인을 구현하지 않고 `User`, `Gathering`, `Membership`, `Weekly Task` 중심으로 시작한다. 신청, 달성률, 리뷰는 기본 흐름이 안정된 뒤 단계적으로 붙인다.

## 나중으로 미루는 범위

- 결제.
- 복잡한 관리자 대시보드.
- 추천 알고리즘.
- Firebase Cloud Messaging 운영 환경 연동.
- LiveKit 화상 회의 토큰 발급과 권한 제어.
- Supabase Presence 기반 접속 상태 동기화.
- 이미지 업로드 스토리지 연동.
- Sentry 운영 모니터링 고도화.
- 리뷰 기반 활동 에너지 정교화.
- OAuth 로그인 실전 연동.
- 복잡한 notification 시스템.
- Microservices.

이 기능들은 인증, 모임, 신청, 멤버십, Todo 흐름이 안정된 뒤에 추가한다.

위 항목들은 `Not in 8-week core scope`로 본다. 문서에는 future scope로 남겨둘 수 있지만, 8주 핵심 학습을 방해하지 않도록 초반 구현 과제에 포함하지 않는다.

## 프론트엔드 연동 관점

프론트엔드 레포는 MSW로 `/api/v1` 형태의 API를 모킹하고 있고, 실제 Spring Boot 백엔드도 대부분 같은 경로를 사용한다. 이 NestJS 프로젝트는 실제 백엔드 경로를 우선 기준으로 삼고, 프론트 MSW와 차이가 나는 부분은 연결 단계에서 맞춘다.

특히 다음은 초기에 맞춰야 한다.

- 응답은 성공 여부, 데이터, 메시지를 일관된 형태로 반환한다.
- 목록 API는 `page`, `limit`, `totalCount`, `totalPages`, `currentPage`를 제공한다.
- 모임 생성/수정은 이미지가 포함될 수 있으므로 최종적으로 `multipart/form-data`를 고려한다.
- 신청 승인 시 `Application.status`와 `Membership` 생성이 같은 트랜잭션 안에서 처리되어야 한다.
- 정원 초과 방지는 실제 백엔드처럼 동시 신청 상황을 고려해야 한다.
- Todo 완료 여부 변경 후 개인/팀 달성률 계산 결과가 프론트 캐시 무효화 흐름과 어긋나지 않아야 한다.
- 실제 백엔드는 `POST /api/v1/auth/register`를 사용하지만, 프론트 mock이나 화면에서 `signup` 명칭을 쓰는 경우 adapter 또는 API 함수 이름 정리가 필요하다.
