# Week 2 — API Design, DTO, Validation, Error Handling

## 1. Why This Week

Week 1에서 요청 흐름을 확인했다면 Week 2에서는 클라이언트가 믿고 사용할 수 있는 API 계약을 설계한다. 백엔드는 단순히 요청을 받는 곳이 아니라 잘못된 입력을 막고, 처리할 수 없는 상황을 예측 가능한 에러로 돌려줘야 한다.

## 2. Learning Objectives

- REST resource와 endpoint 이름을 의도를 가지고 설계한다.
- HTTP method와 status code를 상황에 맞게 선택한다.
- DTO가 request boundary에서 어떤 역할을 하는지 설명한다.
- `ValidationPipe`로 잘못된 입력을 business logic 전에 차단한다.
- validation error와 business error의 차이를 설명한다.
- 일관된 error response shape를 설계한다.
- pagination query parameter와 응답 형태를 설계한다.

## 3. Must-Know Concepts

- REST resource 설계: URL은 행위보다 자원을 표현하고 행위는 method로 표현한다는 점을 설명할 수 있어야 한다.
- Endpoint naming: 프론트엔드가 API를 예측하고 MSW로 모킹하기 쉬운 이름이 왜 중요한지 설명할 수 있어야 한다.
- HTTP status code: 200, 201, 204, 400, 401, 403, 404, 409, 500을 언제 쓰는지 설명할 수 있어야 한다.
- DTO: 외부 입력을 내부 도메인 로직으로 넘기기 전에 구조화하고 검증하는 경계 객체임을 설명할 수 있어야 한다.
- Validation: 타입 체크와 런타임 입력 검증이 다르다는 점을 설명할 수 있어야 한다.
- Error handling: 잘못된 요청과 정상 요청이지만 처리할 수 없는 상황을 구분할 수 있어야 한다.
- API contract: request, response, status code, error shape까지 포함한 약속임을 설명할 수 있어야 한다.
- Pagination: page, limit, totalCount 같은 값이 왜 필요한지 설명할 수 있어야 한다.

## 4. Questions Before Coding

- `POST /gatherings`와 `POST /create-gathering` 중 REST 관점에서 무엇이 더 나은가?
- 입력값이 비어 있는 경우와 존재하지 않는 resource를 요청한 경우는 같은 에러인가?
- 중복 이메일 가입은 validation error인가 business error인가?
- 프론트엔드가 API contract를 모르면 어떤 문제가 생기는가?
- pagination에서 page가 0이거나 limit이 너무 크면 어떻게 처리할 것인가?

## 5. Hands-on Tasks

- Week 1에서 만든 resource API의 endpoint 이름과 method를 다시 검토한다.
- DTO를 추가하고 필수값, 문자열 길이, 숫자 범위 같은 입력 검증을 적용한다.
- 잘못된 요청에서 4xx 응답을 반환하도록 만든다.
- 존재하지 않는 resource 조회, 중복 생성 같은 business error를 구분한다.
- 목록 API에 pagination query를 추가한다.
- API contract를 짧은 Markdown 표로 정리한다.

## 6. Constraints

- 아직 DB를 연결하지 않는다.
- 인증/인가를 구현하지 않는다.
- 모든 에러를 하나의 500으로 처리하지 않는다.
- 과한 global abstraction을 만들지 않는다.
- Swagger 자동 문서화는 이번 주 필수 범위가 아니다.

## 7. Acceptance Criteria

- 적어도 하나의 생성 API가 DTO validation을 통과해야 service가 실행된다.
- 잘못된 입력에서 의도한 400 응답을 확인할 수 있다.
- 존재하지 않는 resource 요청에서 404 응답을 확인할 수 있다.
- 중복 또는 충돌 상황에서 409를 선택할지 여부를 설명할 수 있다.
- 목록 API는 `page`, `limit`, `totalCount`, `items` 또는 동등한 구조를 반환한다.
- status code를 선택한 이유를 각 API별로 설명할 수 있다.
- API contract 문서가 존재한다.

## 8. Verification

- 성공 요청과 실패 요청을 각각 `curl` 또는 API client로 호출한다.
- validation 실패, not found, conflict 후보 케이스를 직접 확인한다.
- 페이지 크기와 페이지 번호를 바꿔 목록 응답이 달라지는지 확인한다.
- 수동 검증 결과와 남은 의문을 learning log에 기록한다.

## 9. Review Questions

- 이 DTO는 request boundary를 충분히 보호하는가?
- validation 책임과 business rule 책임이 섞이지 않았는가?
- status code 선택이 프론트엔드에서 처리하기 쉬운가?
- error response는 사용자가 이해할 정보와 개발자가 디버깅할 정보를 적절히 나누는가?
- pagination 기본값과 최대값은 합리적인가?

## 10. Explain It Without Code

- 잘못된 요청과 처리할 수 없는 정상 요청의 차이를 설명하라.
- DTO와 TypeScript type의 차이를 설명하라.
- `ValidationPipe`가 service 전에 동작해야 하는 이유를 설명하라.
- 400, 401, 403, 404, 409의 차이를 예시로 설명하라.

## 11. Learning Log Checklist

- 새로 설계한 API contract.
- 헷갈렸던 status code.
- validation과 business error를 구분한 기준.
- 프론트엔드에서 이 API를 사용할 때 편한 점/불편한 점.
- 다음 주 DB 연결 전에 정리해야 할 schema 질문.
