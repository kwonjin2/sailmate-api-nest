# Week 3 — PostgreSQL & Relational Database

## 1. Why This Week

API가 메모리 데이터만 다루면 서버를 재시작할 때 데이터가 사라진다. Week 3에서는 PostgreSQL을 사용해 데이터를 영속화하고, ORM 이전에 관계형 DB가 데이터를 어떻게 저장하고 연결하는지 학습한다.

## 2. Learning Objectives

- table, row, column의 의미를 설명한다.
- PK와 FK가 데이터 정합성을 어떻게 지키는지 설명한다.
- 1:1, 1:N, N:M 관계를 실제 도메인 예시로 모델링한다.
- JOIN이 왜 필요한지 SQL 예시로 설명한다.
- normalization의 기본 목적을 설명한다.
- PostgreSQL schema 초안을 작성한다.
- ORM을 사용하는 이유와 단점을 설명한다.
- migration이 필요한 이유를 설명한다.

## 3. Must-Know Concepts

- PostgreSQL: 관계형 데이터를 SQL로 다루는 DB이며 application과 별도 process로 동작한다는 점을 설명할 수 있어야 한다.
- Table/row/column: 데이터를 구조화해서 저장하는 기본 단위를 설명할 수 있어야 한다.
- PK: row를 식별하는 값이고 중복될 수 없다는 점을 설명할 수 있어야 한다.
- FK: 다른 table의 row를 참조해 관계와 정합성을 표현한다는 점을 설명할 수 있어야 한다.
- Constraint: 데이터가 잘못 저장되지 않도록 DB가 강제하는 규칙임을 설명할 수 있어야 한다.
- Relationship: 1:1, 1:N, N:M을 join table 포함해서 설명할 수 있어야 한다.
- JOIN: 여러 table에 나뉜 데이터를 하나의 조회 결과로 합치는 방법임을 설명할 수 있어야 한다.
- Normalization: 중복을 줄이고 변경 시 불일치를 줄이는 설계 원칙임을 설명할 수 있어야 한다.
- ORM: 객체 코드와 SQL/DB 사이를 연결하지만 SQL 이해를 대체하지는 않는다는 점을 설명할 수 있어야 한다.
- Migration: schema 변경 이력을 코드로 관리하는 이유를 설명할 수 있어야 한다.

## 4. Questions Before Coding

- User와 Gathering은 어떤 관계인가?
- Gathering과 Category는 1:N인가 N:M인가?
- 멤버 역할은 User에 있어야 하는가 Membership에 있어야 하는가?
- Todo는 User에 직접 속하는가, Gathering 안의 User 활동인가?
- FK가 없으면 어떤 잘못된 데이터가 저장될 수 있는가?
- ORM만 쓰고 SQL을 모르면 어떤 문제가 생기는가?

## 5. Hands-on Tasks

- SailMate 핵심 도메인 중 `User`, `Gathering`, `Membership`, `WeeklyTask`의 table 초안을 작성한다.
- 각 table의 PK, FK, required column, unique constraint 후보를 적는다.
- SQL로 table 생성 초안을 직접 작성한다.
- sample insert SQL을 작성한다.
- JOIN을 사용해 “특정 모임의 멤버 목록”을 조회하는 SQL을 작성한다.
- ORM을 도입할 후보를 비교하고 decision-log에 남길 초안을 작성한다.

## 6. Constraints

- ORM schema를 먼저 작성하지 않는다. SQL과 관계 모델을 먼저 설명한다.
- 복잡한 도메인 전체를 모델링하지 않는다.
- FCM, LiveKit, OAuth, notification 상세 table은 core scope에 포함하지 않는다.
- DB 성능 튜닝을 깊게 하지 않는다.
- Redis나 cache를 도입하지 않는다.

## 7. Acceptance Criteria

- 핵심 table 4개 이상의 schema 초안을 작성했다.
- 각 FK가 왜 필요한지 설명할 수 있다.
- 1:N과 N:M 관계를 SailMate 도메인 예시로 설명할 수 있다.
- 직접 작성한 JOIN SQL이 어떤 결과를 반환하는지 설명할 수 있다.
- ORM을 쓰더라도 SQL 이해가 필요한 이유를 설명할 수 있다.
- migration이 없을 때 팀 작업에서 생기는 문제를 설명할 수 있다.

## 8. Verification

- 작성한 schema를 눈으로 검토하고 관계가 끊긴 table이 없는지 확인한다.
- sample SQL을 기준으로 어떤 row가 생성되고 연결되는지 설명한다.
- 가능하면 PostgreSQL client에서 SQL을 실행해 보되, DB 실행은 학습자가 명시적으로 준비한 뒤 진행한다.
- 이번 문서 세팅 단계에서는 DB를 실행하지 않는다.

## 9. Review Questions

- 이 FK는 nullable이어야 하는가?
- 이 관계는 정말 N:M인가, 단순 1:N으로 충분한가?
- 중복 저장으로 인해 나중에 불일치가 생길 column은 없는가?
- unique constraint가 필요한 business rule은 무엇인가?
- 이 schema로 pagination 조회가 가능한가?

## 10. Explain It Without Code

- PK와 FK의 차이를 설명하라.
- JOIN이 필요한 이유를 모임과 멤버 예시로 설명하라.
- N:M 관계에서 join table이 필요한 이유를 설명하라.
- ORM의 장점과 단점을 SQL 직접 작성과 비교해 설명하라.

## 11. Learning Log Checklist

- 직접 설계한 table 목록.
- 관계 설계에서 가장 헷갈린 부분.
- SQL로 직접 작성해 본 조회.
- ORM을 쓰기로 한다면 그 이유와 trade-off.
- 다음 주 persistence 구현 전에 남은 schema 질문.
