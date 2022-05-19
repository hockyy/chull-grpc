// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var chull_pb = require('./chull_pb.js');

function serialize_proto_ChullRequest(arg) {
  if (!(arg instanceof chull_pb.ChullRequest)) {
    throw new Error('Expected argument of type proto.ChullRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_ChullRequest(buffer_arg) {
  return chull_pb.ChullRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_ChullResponse(arg) {
  if (!(arg instanceof chull_pb.ChullResponse)) {
    throw new Error('Expected argument of type proto.ChullResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_ChullResponse(buffer_arg) {
  return chull_pb.ChullResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var ConvexHullFinderService = exports.ConvexHullFinderService = {
  findConvexHull: {
    path: '/proto.ConvexHullFinder/FindConvexHull',
    requestStream: false,
    responseStream: false,
    requestType: chull_pb.ChullRequest,
    responseType: chull_pb.ChullResponse,
    requestSerialize: serialize_proto_ChullRequest,
    requestDeserialize: deserialize_proto_ChullRequest,
    responseSerialize: serialize_proto_ChullResponse,
    responseDeserialize: deserialize_proto_ChullResponse,
  },
};

exports.ConvexHullFinderClient = grpc.makeGenericClientConstructor(ConvexHullFinderService);
