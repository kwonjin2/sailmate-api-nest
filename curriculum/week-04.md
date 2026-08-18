# Week 4 — Domain Modeling, Persistence & Transaction

## 1. Why This Week

Week 3에서 DB 구조를 설계했다면 Week 4에서는 SailMate 핵심 도메인을 실제 persistence 계층에 연결한다. 중요한 출발점은 “중간에 실패하면 어떤 데이터가 남는가?”다. Transaction은 decorator나 API 이름을 외우는 주제가 아니라 데이터 정합성을 지키는 도구다.

## 2. Learning Objectives

- Entity/model이 DB schema와 어떻게 연결되는지 설명한다.
- Repository 또는 persistence 계층의 책임을 service와 구분한다.
- Transaction이 필요한 작업과 필요하지 않은 작업을 구분한다.
- atomicity와 data consistency를 실제 예시로 설명한다.
- unique constraint와 application validation의 차이를 설명한다.
- index가 조회 성능에 어떤 영향을 주는지 기본 수준에서 설명한다.
- pagination을 DB 조회 관점에서 구현하고 한계를 설명한다.
- race condition이 정원 제한 같은 규칙에서 왜 문제가 되는지 설명한다.

## 3. Must-Know Concepts

- Entity modeling: domain object와 DB row 사이의 매핑을 설명할 수 있어야 한다.
- Repository/persistence responsibility: DB 접근 세부사항을 service의 business rule과 분리하는 이유를 설명할 수 있어야 한다.
- Transaction: 여러 DB 변경이 모두 성공하거나 모두 취소되어야 하는 상황을 설명할 수 있어야 한다.
- Atomicity: 중간 실패가 partial data를 남기지 않게 하는 성질을 설명할 수 있어야 한다.
- Data consistency: DB 상태가 business rule을 계속 만족해야 한다는 점을 설명할 수 있어야 한다.
- Unique constraint: 중복을 DB 수준에서 막아야 하는 이유를 설명할 수 있어야 한다.
- Index: 조회 속도를 높일 수 있지만 쓰기 비용과 저장 공간 비용이 있다는 점을 설명할 수 있어야 한다.
- Race condition: 동시에 여러 요청이 들어올 때 순차 실행을 가정한 코드가 깨질 수 있음을 설명할 수 있어야 한다.

## 4. Questions Before Coding

- 모임 생성 중 category 연결에 실패하면 gathering row는 남아도 되는가?
- 신청 승인 중 membership 생성에 실패하면 application status는 어떻게 되어야 하는가?
- 정원이 1명 남았는데 동시에 2명이 승인되면 어떻게 막을 것인가?
- 중복 신청은 service에서만 검사해도 충분한가?
- 목록 조회에서 어떤 column에 index가 필요할 수 있는가?
- repository가 business rule까지 알아도 되는가?

## 5. Hands-on Tasks

- Week 3 schema를 ORM model 또는 entity로 옮긴다.
- `User`, `Gathering`, `Membership`, `WeeklyTask` 중심으로 persistence를 연결한다.
- 모임 생성과 조회 API를 DB 기반으로 바꾼다.
- 신청 승인 또는 멤버 추가 흐름 중 하나를 transaction으로 처리한다.
- 중복 가입 또는 중복 신청을 막는 DB constraint 후보를 적용한다.
- 목록 API에 DB 기반 pagination을 적용한다.
- 최소한 하나의 index 후보를 정하고 이유를 기록한다.

## 6. Constraints

- 모든 SailMate 기능을 DB에 붙이려고 하지 않는다.
- 이벤트 기반 알림, FCM, LiveKit은 구현하지 않는다.
- Clean Architecture 폴더 구조를 형식적으로 강제하지 않는다.
- transaction을 모든 service method에 무조건 적용하지 않는다.
- 성능 최적화를 이유로 cache를 도입하지 않는다.

## 7. Acceptance Criteria

- 핵심 도메인 중 최소 3개가 DB table/model과 연결되어 있다.
- DB에 저장한 데이터를 API로 다시 조회할 수 있다.
- transaction이 필요한 작업 하나를 고르고 실패 시 남으면 안 되는 데이터를 설명할 수 있다.
- 중복 데이터 방지를 application logic과 DB constraint 관점에서 설명할 수 있다.
- pagination API가 DB 조회 결과를 기준으로 동작한다.
- index 후보를 하나 이상 고르고 조회 패턴과 연결해 설명할 수 있다.
- race condition이 발생할 수 있는 지점을 하나 이상 설명할 수 있다.

## 8. Verification

- DB가 비어 있는 상태에서 seed 또는 직접 생성 API로 데이터를 만든다.
- 생성한 데이터를 단건 조회와 목록 조회로 확인한다.
- transaction 중간 실패를 가정하고 어떤 데이터가 rollback되어야 하는지 설명한다.
- 중복 생성 요청에서 의도한 에러가 발생하는지 확인한다.
- pagination query를 바꿔 응답이 일관적인지 확인한다.

## 9. Review Questions

- 이 service method는 business rule과 persistence detail이 섞여 있지 않은가?
- transaction 범위가 너무 넓거나 너무 좁지 않은가?
- DB constraint 없이 application code만으로 정합성을 지킬 수 있는가?
- pagination 정렬 기준이 안정적인가?
- 이 index는 실제 조회 패턴 때문에 필요한가?

## 10. Explain It Without Code

- Transaction이 필요한 상황을 SailMate 예시로 설명하라.
- 신청 승인 중 실패했을 때 어떤 데이터가 남으면 안 되는지 설명하라.
- Repository와 Service의 책임 차이를 설명하라.
- Index가 읽기와 쓰기에 주는 trade-off를 설명하라.

## 11. Learning Log Checklist

- DB에 연결한 도메인과 이유.
- transaction을 적용한 흐름과 실패 시나리오.
- constraint와 validation을 나눈 기준.
- index 후보와 선택 이유.
- 다음 주 인증/인가 전에 보호해야 할 API 목록.
