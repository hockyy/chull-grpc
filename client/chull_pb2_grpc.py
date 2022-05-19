# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
"""Client and server classes corresponding to protobuf-defined services."""
import grpc

import chull_pb2 as chull__pb2


class ConvexHullFinderStub(object):
    """Missing associated documentation comment in .proto file."""

    def __init__(self, channel):
        """Constructor.

        Args:
            channel: A grpc.Channel.
        """
        self.FindConvexHull = channel.unary_unary(
                '/proto.ConvexHullFinder/FindConvexHull',
                request_serializer=chull__pb2.ChullRequest.SerializeToString,
                response_deserializer=chull__pb2.ChullResponse.FromString,
                )


class ConvexHullFinderServicer(object):
    """Missing associated documentation comment in .proto file."""

    def FindConvexHull(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')


def add_ConvexHullFinderServicer_to_server(servicer, server):
    rpc_method_handlers = {
            'FindConvexHull': grpc.unary_unary_rpc_method_handler(
                    servicer.FindConvexHull,
                    request_deserializer=chull__pb2.ChullRequest.FromString,
                    response_serializer=chull__pb2.ChullResponse.SerializeToString,
            ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
            'proto.ConvexHullFinder', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))


 # This class is part of an EXPERIMENTAL API.
class ConvexHullFinder(object):
    """Missing associated documentation comment in .proto file."""

    @staticmethod
    def FindConvexHull(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/proto.ConvexHullFinder/FindConvexHull',
            chull__pb2.ChullRequest.SerializeToString,
            chull__pb2.ChullResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)