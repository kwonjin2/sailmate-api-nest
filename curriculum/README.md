# 8주 백엔드 학습 커리큘럼

이 커리큘럼의 목표는 NestJS 문법을 많이 아는 개발자가 되는 것이 아니다.

최종 목표는 작은 백엔드 서비스를 직접 설계, 구현, 테스트, 배포 준비까지 해보고 왜 그렇게 설계했는지 설명할 수 있는 개발자가 되는 것이다.

## 학습 원칙

- 주마다 명확한 학습 목표를 가진다.
- 구현 중심으로 진행하되, 구현 전에 먼저 개념과 설계를 설명한다.
- 매주는 개념 -> 설계 -> 구현 -> 테스트 -> 리뷰 -> 기록 순서로 진행한다.
- 완료 여부는 학습 시간이나 강의 수가 아니라 Acceptance Criteria를 기준으로 판단한다.
- AI는 정답 제공자가 아니라 리뷰어이자 튜터다.
- 학습자가 충분히 시도하기 전에는 완성 코드를 받지 않는다.

## 8주 흐름

| 주차 | 주제 | 핵심 결과물 |
| --- | --- | --- |
| Week 1 | Backend, HTTP, NestJS Fundamentals | 학습자가 직접 NestJS 프로젝트 초기화, 요청 흐름 설명, 헬스 체크 API |
| Week 2 | API Design, DTO, Validation, Error Handling | 검증 가능한 REST API 계약과 에러 응답 |
| Week 3 | PostgreSQL & Relational Database | SQL로 설명 가능한 관계형 schema 초안 |
| Week 4 | Domain Modeling, Persistence & Transaction | SailMate 핵심 도메인의 DB 연결과 transaction 규칙 |
| Week 5 | Authentication, Authorization & Security | 인증/인가 책임이 분리된 보호 API |
| Week 6 | Testing Backend Systems | unit/integration/e2e 목적이 분명한 테스트 |
| Week 7 | Docker, CI & Deployment | 로컬과 배포 환경 차이를 설명할 수 있는 실행 구조 |
| Week 8 | Integration, Review & Production Thinking | 최종 통합 점검, ADR, README/API 문서, 회고 |

## 운영 방식

각 주차는 다음 문서를 source of truth로 사용한다.

- [Week 1](./week-01.md)
- [Week 2](./week-02.md)
- [Week 3](./week-03.md)
- [Week 4](./week-04.md)
- [Week 5](./week-05.md)
- [Week 6](./week-06.md)
- [Week 7](./week-07.md)
- [Week 8](./week-08.md)

각 주차를 시작할 때는 먼저 `Questions Before Coding`에 답한다. 구현 후에는 `Acceptance Criteria`와 `Verification`을 기준으로 완료 여부를 판단하고, 마지막에는 `docs/learning-log.md`에 기록한다.
