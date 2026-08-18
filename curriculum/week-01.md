# Week 1 — Backend, HTTP, NestJS Fundamentals

## 1. Why This Week

백엔드 학습의 첫 목표는 프레임워크 문법을 외우는 것이 아니라 요청이 서버에 들어와 응답으로 나가기까지의 흐름을 이해하는 것이다. NestJS 프로젝트를 직접 초기화하면서 Node.js 서버, Nest application, Module, Controller, Service가 어떤 역할을 하는지 확인한다.

Week 1에서는 학습자가 직접 NestJS 프로젝트를 초기화한다. AI는 초기화 명령을 대신 실행하지 않고, 선택지를 설명하고 결과를 리뷰한다.

## 2. Learning Objectives

- 백엔드가 프론트엔드와 데이터베이스 사이에서 어떤 책임을 갖는지 설명한다.
- HTTP request와 response의 구성 요소를 설명한다.
- HTTP method와 status code의 기본 의미를 구분한다.
- NestJS bootstrap 흐름을 말로 설명한다.
- Module, Controller, Provider, Service의 책임을 구분한다.
- Dependency Injection이 직접 객체를 생성하는 방식보다 어떤 문제를 줄이는지 설명한다.
- 간단한 헬스 체크 API를 직접 만들고 호출한다.

## 3. Must-Know Concepts

- Backend: 클라이언트 요청을 받아 검증, 비즈니스 규칙 처리, 데이터 접근, 응답 생성을 담당한다는 점을 설명할 수 있어야 한다.
- Node.js server: JavaScript/TypeScript 런타임이 서버 프로세스로 실행되고 네트워크 요청을 처리한다는 점을 설명할 수 있어야 한다.
- HTTP request/response: method, path, headers, body, status code가 각각 무엇을 의미하는지 설명할 수 있어야 한다.
- REST 기본: resource 중심으로 URL을 설계하고 method로 행위를 표현하는 이유를 설명할 수 있어야 한다.
- NestJS bootstrap: `main.ts`에서 Nest application이 생성되고 HTTP 서버가 시작되는 흐름을 설명할 수 있어야 한다.
- Module: 관련 provider와 controller를 묶어 의존성 범위를 관리하는 단위임을 설명할 수 있어야 한다.
- Controller: HTTP 요청을 받아 service로 넘기고 응답을 매핑하는 계층임을 설명할 수 있어야 한다.
- Provider/Service: 재사용 가능한 비즈니스 로직을 담고 DI container가 관리하는 객체임을 설명할 수 있어야 한다.
- Dependency Injection: 필요한 객체를 직접 생성하지 않고 외부에서 주입받아 결합도를 낮추는 방식임을 설명할 수 있어야 한다.

## 4. Questions Before Coding

- 백엔드는 프론트엔드가 직접 DB에 접근하지 않도록 어떤 책임을 대신 지는가?
- `GET /health`는 왜 첫 API로 적절한가?
- controller 안에 모든 로직을 넣으면 어떤 문제가 생기는가?
- service를 따로 두면 테스트와 변경에 어떤 장점이 있는가?
- NestJS의 module은 단순 폴더와 무엇이 다른가?
- DI가 없다면 service가 다른 service를 사용할 때 어떤 코드가 늘어나는가?

## 5. Hands-on Tasks

- 학습자가 직접 NestJS 프로젝트를 초기화한다.
- 생성된 파일 중 `main.ts`, root module, root controller, root service를 읽고 역할을 요약한다.
- `GET /health` endpoint를 직접 만든다.
- DB 없이 메모리 배열을 사용하는 아주 작은 resource API를 만든다.
- controller에 있던 로직과 service에 있어야 할 로직을 구분해 본다.
- `curl` 또는 API client로 직접 endpoint를 호출한다.

## 6. Constraints

- DB를 연결하지 않는다.
- 인증/인가를 구현하지 않는다.
- Prisma, TypeORM 같은 ORM을 설치하지 않는다.
- 복잡한 폴더 구조를 만들지 않는다.
- 공통 응답 wrapper, global exception filter를 성급히 만들지 않는다.
- AI에게 완성 controller/service 파일을 요청하지 않는다.

## 7. Acceptance Criteria

- 학습자가 직접 NestJS 프로젝트를 초기화했다.
- 프로젝트에 정의된 개발 서버 명령으로 서버를 실행할 수 있다.
- `GET /health`를 호출하면 200 status와 간단한 응답을 받을 수 있다.
- 최소 2개 이상의 HTTP method를 사용하는 DB 없는 API를 호출할 수 있다.
- 요청이 Client -> HTTP -> Nest application -> Controller -> Service -> Response로 이동하는 흐름을 말로 설명할 수 있다.
- controller와 service에 각각 어떤 코드가 있어야 하는지 예시를 들어 설명할 수 있다.
- `docs/learning-log.md`에 Week 1 학습 기록을 남겼다.

## 8. Verification

- 개발 서버를 실행한다.
- `curl` 또는 API client로 `GET /health`를 호출한다.
- 직접 만든 resource API의 성공 요청과 실패 요청을 각각 호출한다.
- 서버 콘솔 로그와 HTTP 응답을 확인한다.
- 아직 테스트 환경이 없다면 수동 검증 결과를 learning log에 기록한다.

## 9. Review Questions

- 왜 이 endpoint를 이 controller에 두었는가?
- 이 로직은 controller가 아니라 service에 있어야 하는가?
- service가 HTTP request 객체를 직접 알아야 하는가?
- 지금 만든 API의 resource 이름은 REST 관점에서 자연스러운가?
- 실패 요청은 어떤 status code를 반환해야 하는가?
- 지금 구조에서 테스트하기 어려운 부분은 어디인가?

## 10. Explain It Without Code

- HTTP 요청 하나가 NestJS 서버에서 처리되는 전체 흐름을 설명하라.
- Module, Controller, Service의 책임을 각각 설명하라.
- DI가 해결하는 문제를 직접 객체 생성 방식과 비교해 설명하라.
- `GET /health`가 배포나 운영에서 왜 유용한지 설명하라.

## 11. Learning Log Checklist

- 오늘 처음 이해한 백엔드 개념.
- NestJS가 자동으로 해주는 일과 직접 작성한 일.
- controller/service 책임 분리에서 헷갈린 점.
- 직접 호출해 본 endpoint와 결과.
- 다음 주 API 설계 전에 보완해야 할 질문.
