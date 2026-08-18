# Week 7 — Docker, CI & Deployment

## 1. Why This Week

로컬에서 동작하는 서버가 다른 환경에서도 동작하려면 process, port, environment variable, database 연결, build 결과물을 이해해야 한다. Week 7의 목표는 “내 노트북에서는 되는데 서버에서는 왜 안 되지?”를 분석할 기반을 만드는 것이다.

## 2. Learning Objectives

- application process와 port의 의미를 설명한다.
- environment variable이 로컬과 배포 환경을 나누는 이유를 설명한다.
- Docker image와 container의 차이를 설명한다.
- Dockerfile이 build/runtime 환경을 어떻게 정의하는지 설명한다.
- Docker Compose로 app과 PostgreSQL을 함께 실행하는 이유를 설명한다.
- development와 production 실행 방식의 차이를 설명한다.
- CI에서 build/test automation을 돌리는 이유를 설명한다.
- health check와 logging의 기본 목적을 설명한다.

## 3. Must-Know Concepts

- Process: 서버 애플리케이션이 OS 위에서 실행되는 단위임을 설명할 수 있어야 한다.
- Port: 외부 요청이 어떤 process로 들어갈지 구분하는 번호임을 설명할 수 있어야 한다.
- Environment variable: 코드 변경 없이 환경별 설정을 바꾸는 방식임을 설명할 수 있어야 한다.
- Docker image: 실행 환경을 재현 가능하게 포장한 결과물임을 설명할 수 있어야 한다.
- Docker container: image를 실행한 process 환경임을 설명할 수 있어야 한다.
- Dockerfile: dependency 설치, build, start command를 명시하는 파일임을 설명할 수 있어야 한다.
- Docker Compose: app과 PostgreSQL 같은 여러 service를 함께 띄우는 도구임을 설명할 수 있어야 한다.
- CI: push/PR 시 build와 test를 자동 검증해 깨진 코드를 빨리 발견하는 흐름임을 설명할 수 있어야 한다.
- Deployment: 로컬이 아닌 서버 환경에서 app을 실행하고 외부 트래픽을 받게 하는 과정임을 설명할 수 있어야 한다.
- Logging/health check: 운영 중 상태 확인과 장애 분석을 위한 최소 도구임을 설명할 수 있어야 한다.

## 4. Questions Before Coding

- 로컬 `.env` 값을 production에 그대로 쓰면 어떤 문제가 생기는가?
- Docker image와 container는 어떻게 다른가?
- DB container가 먼저 뜨지 않았을 때 app은 어떻게 실패할 수 있는가?
- CI에서 lint, test, build 중 무엇을 먼저 실행해야 하는가?
- health check endpoint는 어떤 정보를 반환해야 하는가?
- Kubernetes가 지금 왜 필요하지 않은가?

## 5. Hands-on Tasks

- 환경 변수 목록을 정리한다.
- Dockerfile을 작성한다.
- PostgreSQL과 app을 함께 실행하는 Docker Compose 구성을 만든다.
- development와 production 실행 명령의 차이를 README에 정리한다.
- CI에서 install, lint, test, build를 실행하는 workflow 초안을 만든다.
- health check endpoint가 container 환경에서도 동작하는지 확인한다.
- 기본 logging 위치와 민감 정보 노출 여부를 확인한다.

## 6. Constraints

- Kubernetes를 다루지 않는다.
- 복잡한 cloud architecture를 설계하지 않는다.
- Redis, message queue, service mesh를 도입하지 않는다.
- production-grade monitoring을 깊게 구현하지 않는다.
- secret 값을 repository에 커밋하지 않는다.

## 7. Acceptance Criteria

- app과 PostgreSQL을 Docker Compose로 함께 실행할 수 있다.
- 환경 변수 없이 실행했을 때 어떤 설정이 부족한지 명확한 에러를 확인할 수 있다.
- Docker container 안에서도 health check API가 동작한다.
- CI에서 최소 build/test 자동화 계획 또는 workflow가 존재한다.
- development와 production 환경 차이를 설명할 수 있다.
- secret을 코드나 문서 예시에 실제 값으로 남기지 않았다.

## 8. Verification

- Docker build를 실행한다.
- Docker Compose로 app과 PostgreSQL을 실행한다.
- container 환경에서 health check를 호출한다.
- CI workflow가 있다면 로컬에서 같은 명령 순서를 실행한다.
- 로그에 민감 정보가 출력되지 않는지 확인한다.

## 9. Review Questions

- Dockerfile에 불필요한 파일이나 secret이 포함되지 않는가?
- 환경 변수 기본값이 production에서 위험하지 않은가?
- container 재시작 시 DB 연결 실패를 어떻게 다룰 것인가?
- CI가 너무 느리거나 너무 약하지 않은가?
- health check가 실제 장애를 감지하는 데 충분한가?

## 10. Explain It Without Code

- Docker image와 container의 차이를 설명하라.
- app과 DB를 Compose로 함께 띄우는 이유를 설명하라.
- 로컬과 production 환경의 차이를 설명하라.
- CI가 팀 개발에서 어떤 문제를 줄이는지 설명하라.

## 11. Learning Log Checklist

- Docker로 실행하며 겪은 실패.
- 환경 변수 중 가장 헷갈린 값.
- 로컬과 container 환경 차이.
- CI에서 자동화한 검증.
- 배포 전에 남은 위험.
