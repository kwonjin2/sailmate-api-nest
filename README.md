# sailmate-api-nest

프론트엔드 개발자가 8주 동안 NestJS로 백엔드 공통 원리를 학습하기 위한 저장소입니다.

목표는 NestJS 문법을 많이 외우는 것이 아닙니다. 작은 백엔드 서비스를 직접 설계하고, 구현하고, 테스트하고, 배포 준비까지 해보면서 왜 그렇게 설계했는지 설명할 수 있는 개발자가 되는 것입니다.

## 왜 NestJS인가

NestJS는 module, controller, provider, service, dependency injection 같은 백엔드 구조를 명확하게 드러냅니다. TypeScript를 유지하면서 HTTP, API 설계, 계층 분리, 인증/인가, 테스트 같은 백엔드 기본기를 연습하기 좋습니다.

## 왜 PostgreSQL인가

PostgreSQL은 관계형 데이터베이스 기본기를 학습하기에 적합합니다. 이 프로젝트에서는 특정 ORM 사용법보다 PK, FK, JOIN, transaction, index, schema 설계 같은 관계형 DB 원리를 먼저 이해합니다.

PostgreSQL에서 익힌 개념은 이후 FastAPI, Django, Spring Boot 같은 다른 백엔드 프레임워크를 배울 때도 그대로 재사용할 수 있습니다.

## 학습 방식

매주 다음 흐름으로 진행합니다.

1. 개념을 학습한다.
2. 구현 전에 먼저 설계하고 이유를 설명한다.
3. 학습자가 직접 구현한다.
4. 실행 또는 테스트로 검증한다.
5. AI에게 코드 리뷰를 받는다.
6. 잘못 이해한 개념을 수정한다.
7. 필요하면 리팩터링한다.
8. 학습 기록을 남긴다.

완료 여부는 공부한 시간이나 강의 수가 아니라 Acceptance Criteria를 만족했는지로 판단합니다.

## 문서

- [전체 커리큘럼](./curriculum/README.md)
- [프로젝트 명세](./docs/project-spec.md)
- [결정 기록](./docs/decision-log.md)
- [학습 기록](./docs/learning-log.md)

## 현재 상태

아직 NestJS 프로젝트는 초기화하지 않았습니다.

Week 1에서 학습자가 직접 NestJS 프로젝트를 초기화하고, 그 이후 실제 실행 명령과 scripts를 README에 업데이트합니다.
