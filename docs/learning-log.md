# 학습 기록

학습한 내용, 헷갈렸던 부분, 실패한 이유, 다음에 개선할 내용을 기록하는 파일이다.

## 템플릿

```md
## YYYY-MM-DD

### 주제

### What I learned

### What I misunderstood

### How my understanding changed

### What I implemented

### What failed

### Why it failed

### Trade-offs I considered

### Questions still unanswered

### 다음 행동
```

## 2026-09-10

### 주제

Week 1 — Backend, HTTP, NestJS Fundamentals

### What I learned

- `main.ts`의 `bootstrap()`이 `NestFactory.create(AppModule)`로 Nest application을 생성하고, `app.listen()`으로 HTTP 서버를 시작한다.
- Module은 단순한 폴더가 아니라 NestJS가 Controller와 Provider의 구성 및 의존성 관계를 파악하는 단위다.
- Controller는 HTTP method와 path를 라우팅하고 요청과 응답을 매핑한다. Service는 HTTP 세부사항과 분리된 로직을 맡는다.
- Service에 `@Injectable()`을 붙이고 Controller 생성자에서 주입받으면 Controller가 Service를 직접 생성하지 않아도 된다.
- `GET`은 리소스 조회, `POST`는 리소스 생성에 사용했다. NestJS의 `@Post()`는 별도로 상태 코드를 지정하지 않으면 `201 Created`를 반환한다.
- 메모리 배열은 DB 없이 요청 흐름을 빠르게 확인하기에는 충분하지만, 프로세스가 재시작되면 데이터가 사라진다.

### What I misunderstood

- 처음에는 Module, Controller, Service를 각각 왜 나누는지보다 생성된 파일과 데코레이터 문법을 이해하는 데 집중했다.
- TypeScript의 요청 body 타입 선언만으로 런타임 입력도 검증될 수 있다고 혼동할 여지가 있었다. 현재 `@Body() body: { title: string; description: string }`는 컴파일 시점 타입일 뿐, 실제 요청을 검증하지 않는다.

### How my understanding changed

NestJS 코드를 파일별로 외우기보다 요청이 `Client -> HTTP server -> Controller -> Service -> Response` 순서로 이동한다고 이해하니 각 계층의 책임이 명확해졌다. Controller와 Service를 나누는 이유도 형식적인 구조가 아니라, HTTP 처리와 로직을 따로 변경하고 테스트하기 위한 것이라고 이해했다.

### What I implemented

- NestJS 프로젝트를 초기화하고 개발 서버를 실행했다.
- `GET /health`를 구현해 `200 OK`와 `{ "status": "ok" }` 응답을 확인했다.
- 메모리 배열 기반의 `GET /gatherings`와 `POST /gatherings`를 구현했다.
- `POST /gatherings`로 생성한 모임이 `GET /gatherings` 결과에 포함되는 것을 `curl`로 확인했다.
- 생성 시 `randomUUID()`로 `id`를 만들고 `new Date().toISOString()`으로 `createdAt`을 기록했다.

### What failed

- 서버를 재시작하면 생성한 Gathering 데이터가 사라진다.
- 필수 필드가 없거나 타입이 잘못된 요청을 차단하는 DTO와 runtime validation이 없다.

### Why it failed

현재 데이터는 데이터베이스가 아니라 `AppService` 인스턴스의 배열에 저장된다. 또한 TypeScript 타입은 실행 시 제거되므로 DTO와 ValidationPipe 없이 요청 body의 구조를 보장할 수 없다.

### Trade-offs I considered

Week 1의 목표는 DB나 완성된 API 설계가 아니라 HTTP 요청이 Controller와 Service를 거쳐 응답되는 흐름을 이해하는 것이다. 그래서 영속성과 입력 검증은 잠시 미루고 메모리 배열로 가장 작은 동작 버전을 만들었다. 구현 속도는 빨랐지만 서버 재시작 시 데이터 유실과 잘못된 입력 허용을 감수했다.

### Questions still unanswered

- NestJS DI container는 Provider 인스턴스를 언제 생성하고 기본적으로 어느 범위까지 재사용하는가?
- `NestFactory.create()`가 application과 HTTP adapter를 초기화하는 과정은 어떻게 구성되는가?
- DTO와 ValidationPipe를 적용하면 실패 요청의 응답 형태와 상태 코드는 어떻게 결정되는가?
- Service unit test와 API e2e test는 각각 어떤 동작을 보호해야 하는가?

### 다음 행동

- Week 1 요구사항에 맞춰 잘못된 `POST /gatherings` 요청이 현재 어떻게 처리되는지 직접 호출하고 결과를 확인한다.
- Week 2를 시작하기 전에 요청 DTO와 runtime validation의 차이를 설명할 수 있도록 정리한다.
- 이후 학습 단계에서 메모리 저장소를 PostgreSQL과 Prisma 기반 영속 저장소로 교체한다.
