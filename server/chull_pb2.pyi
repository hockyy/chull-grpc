"""
@generated by mypy-protobuf.  Do not edit manually!
isort:skip_file
"""
import builtins
import google.protobuf.descriptor
import google.protobuf.internal.containers
import google.protobuf.message
import typing
import typing_extensions

DESCRIPTOR: google.protobuf.descriptor.FileDescriptor

class Points(google.protobuf.message.Message):
    DESCRIPTOR: google.protobuf.descriptor.Descriptor
    X_FIELD_NUMBER: builtins.int
    Y_FIELD_NUMBER: builtins.int
    x: builtins.int
    y: builtins.int
    def __init__(self,
        *,
        x: builtins.int = ...,
        y: builtins.int = ...,
        ) -> None: ...
    def ClearField(self, field_name: typing_extensions.Literal["x",b"x","y",b"y"]) -> None: ...
global___Points = Points

class ChullRequest(google.protobuf.message.Message):
    DESCRIPTOR: google.protobuf.descriptor.Descriptor
    N_FIELD_NUMBER: builtins.int
    POINTS_FIELD_NUMBER: builtins.int
    GETAREA_FIELD_NUMBER: builtins.int
    GETPOINTS_FIELD_NUMBER: builtins.int
    DESCRIPTION_FIELD_NUMBER: builtins.int
    n: builtins.int
    @property
    def points(self) -> google.protobuf.internal.containers.RepeatedCompositeFieldContainer[global___Points]: ...
    getArea: builtins.bool
    getPoints: builtins.bool
    description: typing.Text
    def __init__(self,
        *,
        n: builtins.int = ...,
        points: typing.Optional[typing.Iterable[global___Points]] = ...,
        getArea: builtins.bool = ...,
        getPoints: builtins.bool = ...,
        description: typing.Text = ...,
        ) -> None: ...
    def ClearField(self, field_name: typing_extensions.Literal["description",b"description","getArea",b"getArea","getPoints",b"getPoints","n",b"n","points",b"points"]) -> None: ...
global___ChullRequest = ChullRequest

class ChullResponse(google.protobuf.message.Message):
    DESCRIPTOR: google.protobuf.descriptor.Descriptor
    AREA_FIELD_NUMBER: builtins.int
    N_FIELD_NUMBER: builtins.int
    HULL_FIELD_NUMBER: builtins.int
    area: builtins.float
    n: builtins.int
    @property
    def hull(self) -> google.protobuf.internal.containers.RepeatedCompositeFieldContainer[global___Points]: ...
    def __init__(self,
        *,
        area: typing.Optional[builtins.float] = ...,
        n: builtins.int = ...,
        hull: typing.Optional[typing.Iterable[global___Points]] = ...,
        ) -> None: ...
    def HasField(self, field_name: typing_extensions.Literal["_area",b"_area","area",b"area"]) -> builtins.bool: ...
    def ClearField(self, field_name: typing_extensions.Literal["_area",b"_area","area",b"area","hull",b"hull","n",b"n"]) -> None: ...
    def WhichOneof(self, oneof_group: typing_extensions.Literal["_area",b"_area"]) -> typing.Optional[typing_extensions.Literal["area"]]: ...
global___ChullResponse = ChullResponse
