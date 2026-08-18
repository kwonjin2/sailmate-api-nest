# Week 8 — Integration, Review & Production Thinking

## 1. Why This Week

Week 8은 새 기술을 많이 추가하는 주가 아니다. 7주 동안 만든 API와 설계를 통합적으로 점검하고, 왜 그렇게 설계했는지 설명할 수 있는 상태로 정리하는 주다.

## 2. Learning Objectives

- 요청 하나가 서버에서 처리되는 전체 흐름을 설명한다.
- Controller, Service, Repository 책임을 실제 코드 기준으로 설명한다.
- DB schema를 그렇게 만든 이유를 설명한다.
- Transaction을 사용한 위치와 이유를 설명한다.
- 인증/인가 흐름을 설명한다.
- 테스트 전략과 신뢰 범위를 설명한다.
- 배포 구조와 환경 차이를 설명한다.
- 가장 큰 기술 부채와 다음 개선 방향을 설명한다.
- README, API documentation, ADR, learning log를 정리한다.

## 3. Must-Know Concepts

- API integration: 여러 endpoint가 같은 domain rule과 response contract를 지키는지 확인하는 과정임을 설명할 수 있어야 한다.
- Architecture review: 계층 책임, 의존성 방향, 변경 가능성을 점검하는 활동임을 설명할 수 있어야 한다.
- Refactoring: 외부 동작을 유지하면서 내부 구조를 개선하는 작업임을 설명할 수 있어야 한다.
- Error handling review: client가 예측 가능한 방식으로 실패를 처리할 수 있는지 확인하는 과정임을 설명할 수 있어야 한다.
- Security review: 인증/인가 누락, secret 노출, 민감 정보 응답을 점검하는 활동임을 설명할 수 있어야 한다.
- DB consistency review: FK, constraint, transaction, race condition 후보를 다시 확인하는 과정임을 설명할 수 있어야 한다.
- Test coverage review: 숫자가 아니라 핵심 성공/실패 흐름이 보호되는지 확인하는 관점임을 설명할 수 있어야 한다.
- ADR: 중요한 결정의 이유와 trade-off를 나중에 추적할 수 있게 기록하는 문서임을 설명할 수 있어야 한다.

## 4. Questions Before Coding

- 지금 API 중 가장 변경에 취약한 부분은 어디인가?
- Controller가 service 책임을 침범한 곳은 없는가?
- Service가 persistence detail을 너무 많이 알고 있지는 않은가?
- 가장 위험한 data consistency 문제는 무엇인가?
- 인증은 됐지만 인가가 빠진 endpoint는 없는가?
- 테스트가 없는 가장 중요한 실패 케이스는 무엇인가?
- 다시 만든다면 가장 먼저 바꿀 설계는 무엇인가?

## 5. Hands-on Tasks

- 전체 API 목록과 status code를 점검한다.
- error response shape가 일관적인지 확인한다.
- 인증/인가가 필요한 endpoint 목록을 점검한다.
- DB schema와 relation을 다시 설명하고 빠진 constraint를 찾는다.
- transaction이 필요한 흐름과 실제 적용 위치를 비교한다.
- 핵심 테스트 목록과 빠진 실패 케이스를 정리한다.
- README에 실제 실행, 테스트, 환경 변수, API 문서 링크를 업데이트한다.
- decision-log에 실제 구현 중 내린 중요한 결정을 정리한다.
- 최종 learning retrospective를 작성한다.

## 6. Constraints

- 새 대형 기능을 추가하지 않는다.
- LiveKit, FCM, OAuth, 복잡한 notification을 억지로 마무리하지 않는다.
- 성능 최적화를 이유로 cache나 Redis를 새로 도입하지 않는다.
- Clean Architecture로 전체 구조를 갈아엎지 않는다.
- README를 과장된 포트폴리오 문구로 채우지 않는다.

## 7. Acceptance Criteria

- 주요 API를 성공/실패 케이스로 호출해 결과를 확인했다.
- 요청 처리 흐름을 코드 없이 설명할 수 있다.
- Controller/Service/Repository 책임 분리를 실제 코드 예시로 설명할 수 있다.
- DB schema와 relation 선택 이유를 설명할 수 있다.
- transaction 적용 위치와 실패 시나리오를 설명할 수 있다.
- 인증/인가 흐름과 401/403 차이를 설명할 수 있다.
- 핵심 테스트 전략을 unit/integration/e2e로 나눠 설명할 수 있다.
- README, API documentation, decision-log, learning-log가 최신 상태다.
- 가장 큰 기술 부채와 다음 개선 방향을 기록했다.

## 8. Verification

- 전체 test suite를 실행한다.
- build를 실행한다.
- 주요 endpoint를 수동으로 호출한다.
- Docker 또는 배포 준비 환경에서 health check를 확인한다.
- README의 setup 절차를 처음 보는 사람 기준으로 따라가며 빠진 단계를 찾는다.
- decision-log와 learning-log가 실제 구현 내용을 반영하는지 확인한다.

## 9. Review Questions

- 이 프로젝트를 3개월 뒤 다른 사람이 이어받을 수 있는가?
- API contract가 프론트엔드에서 사용하기 쉬운가?
- 가장 위험한 data consistency 문제를 방치하고 있지 않은가?
- 보안상 바로 고쳐야 할 노출은 없는가?
- 테스트가 실제 사용자 흐름을 보호하는가?
- 지금 추상화 중 지워도 되는 것은 무엇인가?

## 10. Explain It Without Code

- 요청 하나가 서버에서 처리되는 전체 흐름을 설명하라.
- Controller/Service/Repository 책임을 설명하라.
- DB schema를 그렇게 만든 이유를 설명하라.
- Transaction을 사용한 위치와 이유를 설명하라.
- 인증/인가 흐름을 설명하라.
- 테스트 전략을 설명하라.
- 배포 구조를 설명하라.
- 가장 큰 기술 부채와 다시 만든다면 바꿀 점을 설명하라.

## 11. Learning Log Checklist

- 8주 동안 가장 크게 바뀐 이해.
- 가장 어려웠던 백엔드 개념.
- 구현 중 가장 큰 실패와 원인.
- 실제로 설명할 수 있게 된 것.
- 아직 부족한 것.
- FastAPI 학습으로 가져갈 공통 개념.
