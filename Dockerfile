FROM rust:latest
WORKDIR /usr/src/app
COPY . .

RUN cd /usr/src/app

RUN sh -c "$(curl -sSfL https://release.solana.com/v1.9.2/install)"

RUN sh -c "$(rustup component add rls rust-analysis rust-src)"
RUN sh -c "$(cargo install cargo-edit)"

# setting path for Solana
ENV PATH $PATH:/root/.local/share/solana/install/active_release/bin