# Week 6 — Testing Backend Systems

## 1. Why This Week

기능이 늘어나면 수동 확인만으로는 변경이 안전한지 알기 어렵다. Week 6에서는 테스트 개수를 늘리는 것이 아니라, 각 테스트가 무엇을 신뢰하게 해주는지 이해하고 중요한 실패 케이스를 보호한다.

## 2. Learning Objectives

- Unit, Integration, E2E test의 차이를 설명한다.
- Test Double과 Mock을 언제 쓰는지 설명한다.
- 실제 DB를 쓰는 테스트와 mock DB를 쓰는 테스트의 trade-off를 설명한다.
- 실패 케이스를 성공 케이스만큼 중요하게 다룬다.
- 테스트 가능한 service 구조를 만든다.
- 테스트가 통과할 때 무엇을 신뢰할 수 있는지 설명한다.

## 3. Must-Know Concepts

- Unit Test: 작은 단위의 business rule을 빠르게 검증한다는 점을 설명할 수 있어야 한다.
- Integration Test: 여러 계층 또는 DB 연동이 함께 동작하는지 확인한다는 점을 설명할 수 있어야 한다.
- E2E Test: HTTP 요청부터 응답까지 실제 사용자 흐름에 가깝게 검증한다는 점을 설명할 수 있어야 한다.
- Test Double: 외부 의존성을 대체해 테스트 범위를 통제하는 방법임을 설명할 수 있어야 한다.
- Mock: 호출 여부나 반환값을 통제할 수 있지만 실제 연동 신뢰도는 낮아진다는 점을 설명할 수 있어야 한다.
- 실제 DB 테스트: 느리고 준비가 필요하지만 query와 constraint까지 검증할 수 있음을 설명할 수 있어야 한다.
- Failure case: 잘못된 입력, 권한 없음, 중복, 정원 초과, DB 오류 같은 경계 조건을 설명할 수 있어야 한다.

## 4. Questions Before Coding

- 이 테스트가 통과하면 무엇을 신뢰할 수 있는가?
- service unit test에서 DB를 mock해야 하는가?
- repository query는 mock으로 충분한가 실제 DB가 필요한가?
- controller test와 e2e test는 무엇이 다른가?
- 성공 케이스만 테스트하면 어떤 버그를 놓칠 수 있는가?
- 테스트를 어렵게 만드는 코드 구조는 무엇인가?

## 5. Hands-on Tasks

- 핵심 service 하나에 unit test를 작성한다.
- validation 실패 또는 business error 실패 케이스를 테스트한다.
- 인증이 필요한 API의 e2e test 후보를 하나 작성한다.
- repository 또는 DB 연동이 중요한 흐름에 integration test 후보를 정한다.
- mock을 사용한 테스트와 실제 DB가 필요한 테스트를 구분해 표로 정리한다.
- 테스트 실행 결과와 실패 원인을 learning log에 기록한다.

## 6. Constraints

- coverage 숫자만 목표로 삼지 않는다.
- 구현 세부사항을 그대로 따라가는 테스트를 피한다.
- 모든 controller에 기계적으로 테스트를 만들지 않는다.
- 외부 API 연동을 실제 호출하지 않는다.
- 테스트를 위해 production code를 과하게 비틀지 않는다.

## 7. Acceptance Criteria

- service unit test가 최소 하나 이상 존재하고 business rule을 검증한다.
- 실패 케이스 테스트가 최소 하나 이상 존재한다.
- 인증/인가 또는 주요 API 흐름의 e2e test 후보를 실행하거나 설계했다.
- mock을 사용한 이유와 mock하지 않은 이유를 설명할 수 있다.
- “이 테스트가 통과하면 무엇을 신뢰할 수 있는가?”에 답할 수 있다.
- 테스트하기 어려웠던 코드를 찾아 구조 개선 후보를 설명할 수 있다.

## 8. Verification

- 프로젝트에 정의된 test 명령을 실행한다.
- 실패하는 테스트가 있다면 에러 메시지를 읽고 원인을 분류한다.
- 의도적으로 실패 조건을 만들었을 때 테스트가 실패하는지 확인한다.
- 테스트 실행 방법과 결과를 learning log에 기록한다.

## 9. Review Questions

- 이 테스트는 behavior를 검증하는가 implementation detail을 검증하는가?
- mock 때문에 실제 버그를 놓칠 가능성은 없는가?
- 실패 케이스가 충분한가?
- 테스트 이름만 보고 의도를 알 수 있는가?
- 테스트 setup이 production 코드보다 복잡해지고 있지 않은가?

## 10. Explain It Without Code

- Unit, Integration, E2E test의 차이를 설명하라.
- Mock을 쓰면 좋아지는 점과 잃는 점을 설명하라.
- 실제 DB 테스트가 필요한 상황을 설명하라.
- 테스트 가능한 service 구조의 특징을 설명하라.

## 11. Learning Log Checklist

- 작성한 테스트와 검증한 신뢰 범위.
- 실패한 테스트와 원인.
- mock을 사용한 기준.
- 테스트하기 어려웠던 코드.
- 다음 주 Docker/CI에서 자동화하고 싶은 검증.
