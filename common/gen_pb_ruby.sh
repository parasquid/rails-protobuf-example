#!/usr/bin/env bash
protoc --proto_path=src --ruby_out=build/ruby src/models.proto
