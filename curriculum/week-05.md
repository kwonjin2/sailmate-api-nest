# Week 5 — Authentication, Authorization & Security

## 1. Why This Week

데이터가 DB에 저장되기 시작하면 누가 어떤 데이터에 접근할 수 있는지 결정해야 한다. Week 5에서는 Authentication과 Authorization을 구분하고, 비밀번호와 token을 안전하게 다루는 기본기를 학습한다.

## 2. Learning Objectives

- Authentication과 Authorization의 차이를 설명한다.
- password hashing이 왜 필요한지 설명한다.
- session 방식과 JWT 방식의 trade-off를 비교한다.
- access token의 역할과 한계를 설명한다.
- Guard가 어떤 요청을 막는지 설명한다.
- ownership과 role/permission 검사를 service rule과 연결한다.
- secret과 환경 변수를 안전하게 관리해야 하는 이유를 설명한다.
- 기본적인 API security checklist를 적용한다.

## 3. Must-Know Concepts

- Authentication: 요청자가 누구인지 확인하는 과정임을 설명할 수 있어야 한다.
- Authorization: 확인된 사용자가 특정 행동을 할 권한이 있는지 판단하는 과정임을 설명할 수 있어야 한다.
- Password hashing: 원문 비밀번호를 저장하지 않고 검증 가능한 hash만 저장하는 이유를 설명할 수 있어야 한다.
- Session: 서버가 로그인 상태를 저장하는 방식의 장단점을 설명할 수 있어야 한다.
- JWT: token 자체에 claim을 담는 방식의 장단점과 폐기 어려움을 설명할 수 있어야 한다.
- Access token: 짧은 수명의 API 접근 증명이라는 점을 설명할 수 있어야 한다.
- Guard: controller 진입 전 인증/인가 조건을 검사하는 계층임을 설명할 수 있어야 한다.
- Ownership: 모임장만 수정/삭제 가능한 규칙처럼 resource 소유 관계 기반 권한을 설명할 수 있어야 한다.
- Secret/env: 배포 환경에서 비밀값을 코드에 넣지 않는 이유를 설명할 수 있어야 한다.

## 4. Questions Before Coding

- 로그인한 사용자인지 확인하는 것과 모임장인지 확인하는 것은 왜 다른가?
- JWT를 쓰면 logout은 어떻게 처리할 것인가?
- refresh token은 어디에 저장할 것인가?
- 비밀번호 hash와 암호화는 어떻게 다른가?
- 모임 수정 권한 검사는 guard에서 할 것인가 service에서 할 것인가?
- 401과 403은 어떤 상황에서 다르게 반환해야 하는가?

## 5. Hands-on Tasks

- 회원가입과 로그인 API를 구현한다.
- 비밀번호를 hash로 저장한다.
- 로그인 성공 시 access token을 발급한다.
- 인증이 필요한 API에 Guard를 적용한다.
- 현재 사용자 정보를 가져오는 helper 또는 decorator를 만든다.
- 모임 수정/삭제에 ownership check를 적용한다.
- 401과 403 케이스를 의도적으로 만들어 확인한다.

## 6. Constraints

- OAuth provider integration은 구현하지 않는다.
- 복잡한 refresh token rotation은 선택 과제로 둔다.
- role system을 과하게 일반화하지 않는다.
- admin 권한 모델을 미리 만들지 않는다.
- 보안을 이유로 모든 기능을 한 번에 막는 global abstraction을 만들지 않는다.

## 7. Acceptance Criteria

- 회원가입 시 원문 비밀번호가 DB에 저장되지 않는다.
- 로그인 성공 시 token을 받을 수 있다.
- token이 없는 요청은 보호 API에서 401을 받는다.
- 로그인했지만 권한이 없는 요청은 403 또는 명확한 권한 에러를 받는다.
- 모임장이 아닌 사용자는 해당 모임을 수정/삭제할 수 없다.
- JWT와 session 중 이번 프로젝트에서 JWT를 선택한 이유와 trade-off를 설명할 수 있다.
- secret 값이 코드에 하드코딩되어 있지 않다.

## 8. Verification

- 회원가입 후 DB에서 password field가 원문이 아닌지 확인한다.
- 로그인 응답 token으로 보호 API를 호출한다.
- token 없이 보호 API를 호출한다.
- 다른 사용자의 resource를 수정하려고 시도한다.
- 401/403 응답 차이를 기록한다.

## 9. Review Questions

- 인증 책임과 인가 책임이 섞이지 않았는가?
- Guard에서 검사해야 할 것과 service에서 검사해야 할 것이 나뉘었는가?
- password hashing 설정은 너무 약하지 않은가?
- token payload에 민감한 정보가 들어가 있지 않은가?
- ownership check가 누락된 API는 없는가?

## 10. Explain It Without Code

- Authentication과 Authorization의 차이를 설명하라.
- JWT와 session의 trade-off를 설명하라.
- 401과 403의 차이를 설명하라.
- 비밀번호를 평문으로 저장하면 어떤 위험이 있는지 설명하라.

## 11. Learning Log Checklist

- 구현한 인증 흐름.
- JWT와 session 비교에서 선택한 기준.
- 401/403을 구분한 사례.
- ownership check를 적용한 API.
- 아직 불안한 보안 지점.
