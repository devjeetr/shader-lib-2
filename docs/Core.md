# Core Concepts

The design of GPX is inspired by Regl, but with a focus on WebGL2.


### Resources

A resource is an entity that maintains state in the WebGL global context. Examples of resources are:
* Attributes
* Uniforms
* Uniform Buffers
* Buffers
* Textures

While managing these resources, we need to consider three things:
* order of resource update
* inter-resource dependencies
* whether or not to update a resource

