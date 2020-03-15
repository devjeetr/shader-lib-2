[shader-library](../README.md) › [Globals](../globals.md) › ["src/js/GPX/webgl/constants"](_src_js_gpx_webgl_constants_.md)

# External module: "src/js/GPX/webgl/constants"

The following defined constants and descriptions are directly ported from https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants

Any copyright is dedicated to the Public Domain. http://creativecommons.org/publicdomain/zero/1.0/

Contributors

See: https://developer.mozilla.org/en-US/profiles/Sheppy
See: https://developer.mozilla.org/en-US/profiles/fscholz
See: https://developer.mozilla.org/en-US/profiles/AtiX
See: https://developer.mozilla.org/en-US/profiles/Sebastianz

These constants are defined on the WebGLRenderingContext / WebGL2RenderingContext interface

## Index

### Type aliases

* [GL_ACTIVE_ATTRIBUTES](_src_js_gpx_webgl_constants_.md#gl_active_attributes)
* [GL_ACTIVE_TEXTURE](_src_js_gpx_webgl_constants_.md#gl_active_texture)
* [GL_ACTIVE_UNIFORMS](_src_js_gpx_webgl_constants_.md#gl_active_uniforms)
* [GL_ACTIVE_UNIFORM_BLOCKS](_src_js_gpx_webgl_constants_.md#gl_active_uniform_blocks)
* [GL_ALIASED_LINE_WIDTH_RANGE](_src_js_gpx_webgl_constants_.md#gl_aliased_line_width_range)
* [GL_ALIASED_POINT_SIZE_RANGE](_src_js_gpx_webgl_constants_.md#gl_aliased_point_size_range)
* [GL_ALPHA](_src_js_gpx_webgl_constants_.md#gl_alpha)
* [GL_ALPHA_BITS](_src_js_gpx_webgl_constants_.md#gl_alpha_bits)
* [GL_ALREADY_SIGNALED](_src_js_gpx_webgl_constants_.md#gl_already_signaled)
* [GL_ALWAYS](_src_js_gpx_webgl_constants_.md#gl_always)
* [GL_ANY_SAMPLES_PASSED](_src_js_gpx_webgl_constants_.md#gl_any_samples_passed)
* [GL_ANY_SAMPLES_PASSED_CONSERVATIVE](_src_js_gpx_webgl_constants_.md#gl_any_samples_passed_conservative)
* [GL_ARRAY_BUFFER](_src_js_gpx_webgl_constants_.md#gl_array_buffer)
* [GL_ARRAY_BUFFER_BINDING](_src_js_gpx_webgl_constants_.md#gl_array_buffer_binding)
* [GL_ATTACHED_SHADERS](_src_js_gpx_webgl_constants_.md#gl_attached_shaders)
* [GL_BACK](_src_js_gpx_webgl_constants_.md#gl_back)
* [GL_BLEND](_src_js_gpx_webgl_constants_.md#gl_blend)
* [GL_BLEND_COLOR](_src_js_gpx_webgl_constants_.md#gl_blend_color)
* [GL_BLEND_DST_ALPHA](_src_js_gpx_webgl_constants_.md#gl_blend_dst_alpha)
* [GL_BLEND_DST_RGB](_src_js_gpx_webgl_constants_.md#gl_blend_dst_rgb)
* [GL_BLEND_EQUATION](_src_js_gpx_webgl_constants_.md#gl_blend_equation)
* [GL_BLEND_EQUATION_ALPHA](_src_js_gpx_webgl_constants_.md#gl_blend_equation_alpha)
* [GL_BLEND_EQUATION_RGB](_src_js_gpx_webgl_constants_.md#gl_blend_equation_rgb)
* [GL_BLEND_SRC_ALPHA](_src_js_gpx_webgl_constants_.md#gl_blend_src_alpha)
* [GL_BLEND_SRC_RGB](_src_js_gpx_webgl_constants_.md#gl_blend_src_rgb)
* [GL_BLUE_BITS](_src_js_gpx_webgl_constants_.md#gl_blue_bits)
* [GL_BOOL](_src_js_gpx_webgl_constants_.md#gl_bool)
* [GL_BOOL_VEC2](_src_js_gpx_webgl_constants_.md#gl_bool_vec2)
* [GL_BOOL_VEC3](_src_js_gpx_webgl_constants_.md#gl_bool_vec3)
* [GL_BOOL_VEC4](_src_js_gpx_webgl_constants_.md#gl_bool_vec4)
* [GL_BROWSER_DEFAULT_WEBGL](_src_js_gpx_webgl_constants_.md#gl_browser_default_webgl)
* [GL_BUFFER_SIZE](_src_js_gpx_webgl_constants_.md#gl_buffer_size)
* [GL_BUFFER_USAGE](_src_js_gpx_webgl_constants_.md#gl_buffer_usage)
* [GL_BYTE](_src_js_gpx_webgl_constants_.md#gl_byte)
* [GL_CCW](_src_js_gpx_webgl_constants_.md#gl_ccw)
* [GL_CLAMP_TO_EDGE](_src_js_gpx_webgl_constants_.md#gl_clamp_to_edge)
* [GL_COLOR](_src_js_gpx_webgl_constants_.md#gl_color)
* [GL_COLOR_ATTACHMENT0](_src_js_gpx_webgl_constants_.md#gl_color_attachment0)
* [GL_COLOR_ATTACHMENT0_WEBGL](_src_js_gpx_webgl_constants_.md#gl_color_attachment0_webgl)
* [GL_COLOR_ATTACHMENT1](_src_js_gpx_webgl_constants_.md#gl_color_attachment1)
* [GL_COLOR_ATTACHMENT10](_src_js_gpx_webgl_constants_.md#gl_color_attachment10)
* [GL_COLOR_ATTACHMENT10_WEBGL](_src_js_gpx_webgl_constants_.md#gl_color_attachment10_webgl)
* [GL_COLOR_ATTACHMENT11](_src_js_gpx_webgl_constants_.md#gl_color_attachment11)
* [GL_COLOR_ATTACHMENT11_WEBGL](_src_js_gpx_webgl_constants_.md#gl_color_attachment11_webgl)
* [GL_COLOR_ATTACHMENT12](_src_js_gpx_webgl_constants_.md#gl_color_attachment12)
* [GL_COLOR_ATTACHMENT12_WEBGL](_src_js_gpx_webgl_constants_.md#gl_color_attachment12_webgl)
* [GL_COLOR_ATTACHMENT13](_src_js_gpx_webgl_constants_.md#gl_color_attachment13)
* [GL_COLOR_ATTACHMENT13_WEBGL](_src_js_gpx_webgl_constants_.md#gl_color_attachment13_webgl)
* [GL_COLOR_ATTACHMENT14](_src_js_gpx_webgl_constants_.md#gl_color_attachment14)
* [GL_COLOR_ATTACHMENT14_WEBGL](_src_js_gpx_webgl_constants_.md#gl_color_attachment14_webgl)
* [GL_COLOR_ATTACHMENT15](_src_js_gpx_webgl_constants_.md#gl_color_attachment15)
* [GL_COLOR_ATTACHMENT15_WEBGL](_src_js_gpx_webgl_constants_.md#gl_color_attachment15_webgl)
* [GL_COLOR_ATTACHMENT1_WEBGL](_src_js_gpx_webgl_constants_.md#gl_color_attachment1_webgl)
* [GL_COLOR_ATTACHMENT2](_src_js_gpx_webgl_constants_.md#gl_color_attachment2)
* [GL_COLOR_ATTACHMENT2_WEBGL](_src_js_gpx_webgl_constants_.md#gl_color_attachment2_webgl)
* [GL_COLOR_ATTACHMENT3](_src_js_gpx_webgl_constants_.md#gl_color_attachment3)
* [GL_COLOR_ATTACHMENT3_WEBGL](_src_js_gpx_webgl_constants_.md#gl_color_attachment3_webgl)
* [GL_COLOR_ATTACHMENT4](_src_js_gpx_webgl_constants_.md#gl_color_attachment4)
* [GL_COLOR_ATTACHMENT4_WEBGL](_src_js_gpx_webgl_constants_.md#gl_color_attachment4_webgl)
* [GL_COLOR_ATTACHMENT5](_src_js_gpx_webgl_constants_.md#gl_color_attachment5)
* [GL_COLOR_ATTACHMENT5_WEBGL](_src_js_gpx_webgl_constants_.md#gl_color_attachment5_webgl)
* [GL_COLOR_ATTACHMENT6](_src_js_gpx_webgl_constants_.md#gl_color_attachment6)
* [GL_COLOR_ATTACHMENT6_WEBGL](_src_js_gpx_webgl_constants_.md#gl_color_attachment6_webgl)
* [GL_COLOR_ATTACHMENT7](_src_js_gpx_webgl_constants_.md#gl_color_attachment7)
* [GL_COLOR_ATTACHMENT7_WEBGL](_src_js_gpx_webgl_constants_.md#gl_color_attachment7_webgl)
* [GL_COLOR_ATTACHMENT8](_src_js_gpx_webgl_constants_.md#gl_color_attachment8)
* [GL_COLOR_ATTACHMENT8_WEBGL](_src_js_gpx_webgl_constants_.md#gl_color_attachment8_webgl)
* [GL_COLOR_ATTACHMENT9](_src_js_gpx_webgl_constants_.md#gl_color_attachment9)
* [GL_COLOR_ATTACHMENT9_WEBGL](_src_js_gpx_webgl_constants_.md#gl_color_attachment9_webgl)
* [GL_COLOR_BUFFER_BIT](_src_js_gpx_webgl_constants_.md#gl_color_buffer_bit)
* [GL_COLOR_CLEAR_VALUE](_src_js_gpx_webgl_constants_.md#gl_color_clear_value)
* [GL_COLOR_WRITEMASK](_src_js_gpx_webgl_constants_.md#gl_color_writemask)
* [GL_COMPARE_REF_TO_TEXTURE](_src_js_gpx_webgl_constants_.md#gl_compare_ref_to_texture)
* [GL_COMPILE_STATUS](_src_js_gpx_webgl_constants_.md#gl_compile_status)
* [GL_COMPLETION_STATUS_KHR](_src_js_gpx_webgl_constants_.md#gl_completion_status_khr)
* [GL_COMPRESSED_R11_EAC](_src_js_gpx_webgl_constants_.md#gl_compressed_r11_eac)
* [GL_COMPRESSED_RG11_EAC](_src_js_gpx_webgl_constants_.md#gl_compressed_rg11_eac)
* [GL_COMPRESSED_RGB8_ETC2](_src_js_gpx_webgl_constants_.md#gl_compressed_rgb8_etc2)
* [GL_COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2](_src_js_gpx_webgl_constants_.md#gl_compressed_rgb8_punchthrough_alpha1_etc2)
* [GL_COMPRESSED_RGBA8_ETC2_EAC](_src_js_gpx_webgl_constants_.md#gl_compressed_rgba8_etc2_eac)
* [GL_COMPRESSED_RGBA_ASTC_10X10_KHR](_src_js_gpx_webgl_constants_.md#gl_compressed_rgba_astc_10x10_khr)
* [GL_COMPRESSED_RGBA_ASTC_10X5_KHR](_src_js_gpx_webgl_constants_.md#gl_compressed_rgba_astc_10x5_khr)
* [GL_COMPRESSED_RGBA_ASTC_10X6_KHR](_src_js_gpx_webgl_constants_.md#gl_compressed_rgba_astc_10x6_khr)
* [GL_COMPRESSED_RGBA_ASTC_10X8_KHR](_src_js_gpx_webgl_constants_.md#gl_compressed_rgba_astc_10x8_khr)
* [GL_COMPRESSED_RGBA_ASTC_12X10_KHR](_src_js_gpx_webgl_constants_.md#gl_compressed_rgba_astc_12x10_khr)
* [GL_COMPRESSED_RGBA_ASTC_12X12_KHR](_src_js_gpx_webgl_constants_.md#gl_compressed_rgba_astc_12x12_khr)
* [GL_COMPRESSED_RGBA_ASTC_4X4_KHR](_src_js_gpx_webgl_constants_.md#gl_compressed_rgba_astc_4x4_khr)
* [GL_COMPRESSED_RGBA_ASTC_5X4_KHR](_src_js_gpx_webgl_constants_.md#gl_compressed_rgba_astc_5x4_khr)
* [GL_COMPRESSED_RGBA_ASTC_5X5_KHR](_src_js_gpx_webgl_constants_.md#gl_compressed_rgba_astc_5x5_khr)
* [GL_COMPRESSED_RGBA_ASTC_6X5_KHR](_src_js_gpx_webgl_constants_.md#gl_compressed_rgba_astc_6x5_khr)
* [GL_COMPRESSED_RGBA_ASTC_6X6_KHR](_src_js_gpx_webgl_constants_.md#gl_compressed_rgba_astc_6x6_khr)
* [GL_COMPRESSED_RGBA_ASTC_8X5_KHR](_src_js_gpx_webgl_constants_.md#gl_compressed_rgba_astc_8x5_khr)
* [GL_COMPRESSED_RGBA_ASTC_8X6_KHR](_src_js_gpx_webgl_constants_.md#gl_compressed_rgba_astc_8x6_khr)
* [GL_COMPRESSED_RGBA_ASTC_8X8_KHR](_src_js_gpx_webgl_constants_.md#gl_compressed_rgba_astc_8x8_khr)
* [GL_COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL](_src_js_gpx_webgl_constants_.md#gl_compressed_rgba_atc_explicit_alpha_webgl)
* [GL_COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL](_src_js_gpx_webgl_constants_.md#gl_compressed_rgba_atc_interpolated_alpha_webgl)
* [GL_COMPRESSED_RGBA_PVRTC_2BPPV1_IMG](_src_js_gpx_webgl_constants_.md#gl_compressed_rgba_pvrtc_2bppv1_img)
* [GL_COMPRESSED_RGBA_PVRTC_4BPPV1_IMG](_src_js_gpx_webgl_constants_.md#gl_compressed_rgba_pvrtc_4bppv1_img)
* [GL_COMPRESSED_RGBA_S3TC_DXT1_EXT](_src_js_gpx_webgl_constants_.md#gl_compressed_rgba_s3tc_dxt1_ext)
* [GL_COMPRESSED_RGBA_S3TC_DXT3_EXT](_src_js_gpx_webgl_constants_.md#gl_compressed_rgba_s3tc_dxt3_ext)
* [GL_COMPRESSED_RGBA_S3TC_DXT5_EXT](_src_js_gpx_webgl_constants_.md#gl_compressed_rgba_s3tc_dxt5_ext)
* [GL_COMPRESSED_RGB_ATC_WEBGL](_src_js_gpx_webgl_constants_.md#gl_compressed_rgb_atc_webgl)
* [GL_COMPRESSED_RGB_ETC1_WEBGL](_src_js_gpx_webgl_constants_.md#gl_compressed_rgb_etc1_webgl)
* [GL_COMPRESSED_RGB_PVRTC_2BPPV1_IMG](_src_js_gpx_webgl_constants_.md#gl_compressed_rgb_pvrtc_2bppv1_img)
* [GL_COMPRESSED_RGB_PVRTC_4BPPV1_IMG](_src_js_gpx_webgl_constants_.md#gl_compressed_rgb_pvrtc_4bppv1_img)
* [GL_COMPRESSED_RGB_S3TC_DXT1_EXT](_src_js_gpx_webgl_constants_.md#gl_compressed_rgb_s3tc_dxt1_ext)
* [GL_COMPRESSED_SIGNED_R11_EAC](_src_js_gpx_webgl_constants_.md#gl_compressed_signed_r11_eac)
* [GL_COMPRESSED_SIGNED_RG11_EAC](_src_js_gpx_webgl_constants_.md#gl_compressed_signed_rg11_eac)
* [GL_COMPRESSED_SRGB8_ALPHA8_ASTC_10X10_KHR](_src_js_gpx_webgl_constants_.md#gl_compressed_srgb8_alpha8_astc_10x10_khr)
* [GL_COMPRESSED_SRGB8_ALPHA8_ASTC_10X5_KHR](_src_js_gpx_webgl_constants_.md#gl_compressed_srgb8_alpha8_astc_10x5_khr)
* [GL_COMPRESSED_SRGB8_ALPHA8_ASTC_10X6_KHR](_src_js_gpx_webgl_constants_.md#gl_compressed_srgb8_alpha8_astc_10x6_khr)
* [GL_COMPRESSED_SRGB8_ALPHA8_ASTC_10X8_KHR](_src_js_gpx_webgl_constants_.md#gl_compressed_srgb8_alpha8_astc_10x8_khr)
* [GL_COMPRESSED_SRGB8_ALPHA8_ASTC_12X10_KHR](_src_js_gpx_webgl_constants_.md#gl_compressed_srgb8_alpha8_astc_12x10_khr)
* [GL_COMPRESSED_SRGB8_ALPHA8_ASTC_12X12_KHR](_src_js_gpx_webgl_constants_.md#gl_compressed_srgb8_alpha8_astc_12x12_khr)
* [GL_COMPRESSED_SRGB8_ALPHA8_ASTC_4X4_KHR](_src_js_gpx_webgl_constants_.md#gl_compressed_srgb8_alpha8_astc_4x4_khr)
* [GL_COMPRESSED_SRGB8_ALPHA8_ASTC_5X4_KHR](_src_js_gpx_webgl_constants_.md#gl_compressed_srgb8_alpha8_astc_5x4_khr)
* [GL_COMPRESSED_SRGB8_ALPHA8_ASTC_5X5_KHR](_src_js_gpx_webgl_constants_.md#gl_compressed_srgb8_alpha8_astc_5x5_khr)
* [GL_COMPRESSED_SRGB8_ALPHA8_ASTC_6X5_KHR](_src_js_gpx_webgl_constants_.md#gl_compressed_srgb8_alpha8_astc_6x5_khr)
* [GL_COMPRESSED_SRGB8_ALPHA8_ASTC_6X6_KHR](_src_js_gpx_webgl_constants_.md#gl_compressed_srgb8_alpha8_astc_6x6_khr)
* [GL_COMPRESSED_SRGB8_ALPHA8_ASTC_8X5_KHR](_src_js_gpx_webgl_constants_.md#gl_compressed_srgb8_alpha8_astc_8x5_khr)
* [GL_COMPRESSED_SRGB8_ALPHA8_ASTC_8X6_KHR](_src_js_gpx_webgl_constants_.md#gl_compressed_srgb8_alpha8_astc_8x6_khr)
* [GL_COMPRESSED_SRGB8_ALPHA8_ASTC_8X8_KHR](_src_js_gpx_webgl_constants_.md#gl_compressed_srgb8_alpha8_astc_8x8_khr)
* [GL_COMPRESSED_SRGB8_ALPHA8_ETC2_EAC](_src_js_gpx_webgl_constants_.md#gl_compressed_srgb8_alpha8_etc2_eac)
* [GL_COMPRESSED_SRGB8_ETC2](_src_js_gpx_webgl_constants_.md#gl_compressed_srgb8_etc2)
* [GL_COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2](_src_js_gpx_webgl_constants_.md#gl_compressed_srgb8_punchthrough_alpha1_etc2)
* [GL_COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT](_src_js_gpx_webgl_constants_.md#gl_compressed_srgb_alpha_s3tc_dxt1_ext)
* [GL_COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT](_src_js_gpx_webgl_constants_.md#gl_compressed_srgb_alpha_s3tc_dxt3_ext)
* [GL_COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT](_src_js_gpx_webgl_constants_.md#gl_compressed_srgb_alpha_s3tc_dxt5_ext)
* [GL_COMPRESSED_SRGB_S3TC_DXT1_EXT](_src_js_gpx_webgl_constants_.md#gl_compressed_srgb_s3tc_dxt1_ext)
* [GL_COMPRESSED_TEXTURE_FORMATS](_src_js_gpx_webgl_constants_.md#gl_compressed_texture_formats)
* [GL_CONDITION_SATISFIED](_src_js_gpx_webgl_constants_.md#gl_condition_satisfied)
* [GL_CONSTANT_ALPHA](_src_js_gpx_webgl_constants_.md#gl_constant_alpha)
* [GL_CONSTANT_COLOR](_src_js_gpx_webgl_constants_.md#gl_constant_color)
* [GL_CONTEXT_LOST_WEBGL](_src_js_gpx_webgl_constants_.md#gl_context_lost_webgl)
* [GL_COPY_READ_BUFFER](_src_js_gpx_webgl_constants_.md#gl_copy_read_buffer)
* [GL_COPY_READ_BUFFER_BINDING](_src_js_gpx_webgl_constants_.md#gl_copy_read_buffer_binding)
* [GL_COPY_WRITE_BUFFER](_src_js_gpx_webgl_constants_.md#gl_copy_write_buffer)
* [GL_COPY_WRITE_BUFFER_BINDING](_src_js_gpx_webgl_constants_.md#gl_copy_write_buffer_binding)
* [GL_CULL_FACE](_src_js_gpx_webgl_constants_.md#gl_cull_face)
* [GL_CULL_FACE_MODE](_src_js_gpx_webgl_constants_.md#gl_cull_face_mode)
* [GL_CURRENT_PROGRAM](_src_js_gpx_webgl_constants_.md#gl_current_program)
* [GL_CURRENT_QUERY](_src_js_gpx_webgl_constants_.md#gl_current_query)
* [GL_CURRENT_QUERY_EXT](_src_js_gpx_webgl_constants_.md#gl_current_query_ext)
* [GL_CURRENT_VERTEX_ATTRIB](_src_js_gpx_webgl_constants_.md#gl_current_vertex_attrib)
* [GL_CW](_src_js_gpx_webgl_constants_.md#gl_cw)
* [GL_DECR](_src_js_gpx_webgl_constants_.md#gl_decr)
* [GL_DECR_WRAP](_src_js_gpx_webgl_constants_.md#gl_decr_wrap)
* [GL_DELETE_STATUS](_src_js_gpx_webgl_constants_.md#gl_delete_status)
* [GL_DEPTH](_src_js_gpx_webgl_constants_.md#gl_depth)
* [GL_DEPTH24_STENCIL8](_src_js_gpx_webgl_constants_.md#gl_depth24_stencil8)
* [GL_DEPTH32F_STENCIL8](_src_js_gpx_webgl_constants_.md#gl_depth32f_stencil8)
* [GL_DEPTH_ATTACHMENT](_src_js_gpx_webgl_constants_.md#gl_depth_attachment)
* [GL_DEPTH_BITS](_src_js_gpx_webgl_constants_.md#gl_depth_bits)
* [GL_DEPTH_BUFFER_BIT](_src_js_gpx_webgl_constants_.md#gl_depth_buffer_bit)
* [GL_DEPTH_CLEAR_VALUE](_src_js_gpx_webgl_constants_.md#gl_depth_clear_value)
* [GL_DEPTH_COMPONENT](_src_js_gpx_webgl_constants_.md#gl_depth_component)
* [GL_DEPTH_COMPONENT16](_src_js_gpx_webgl_constants_.md#gl_depth_component16)
* [GL_DEPTH_COMPONENT24](_src_js_gpx_webgl_constants_.md#gl_depth_component24)
* [GL_DEPTH_COMPONENT32F](_src_js_gpx_webgl_constants_.md#gl_depth_component32f)
* [GL_DEPTH_FUNC](_src_js_gpx_webgl_constants_.md#gl_depth_func)
* [GL_DEPTH_RANGE](_src_js_gpx_webgl_constants_.md#gl_depth_range)
* [GL_DEPTH_STENCIL](_src_js_gpx_webgl_constants_.md#gl_depth_stencil)
* [GL_DEPTH_STENCIL_ATTACHMENT](_src_js_gpx_webgl_constants_.md#gl_depth_stencil_attachment)
* [GL_DEPTH_TEST](_src_js_gpx_webgl_constants_.md#gl_depth_test)
* [GL_DEPTH_WRITEMASK](_src_js_gpx_webgl_constants_.md#gl_depth_writemask)
* [GL_DITHER](_src_js_gpx_webgl_constants_.md#gl_dither)
* [GL_DONT_CARE](_src_js_gpx_webgl_constants_.md#gl_dont_care)
* [GL_DRAW_BUFFER0](_src_js_gpx_webgl_constants_.md#gl_draw_buffer0)
* [GL_DRAW_BUFFER0_WEBGL](_src_js_gpx_webgl_constants_.md#gl_draw_buffer0_webgl)
* [GL_DRAW_BUFFER1](_src_js_gpx_webgl_constants_.md#gl_draw_buffer1)
* [GL_DRAW_BUFFER10](_src_js_gpx_webgl_constants_.md#gl_draw_buffer10)
* [GL_DRAW_BUFFER10_WEBGL](_src_js_gpx_webgl_constants_.md#gl_draw_buffer10_webgl)
* [GL_DRAW_BUFFER11](_src_js_gpx_webgl_constants_.md#gl_draw_buffer11)
* [GL_DRAW_BUFFER11_WEBGL](_src_js_gpx_webgl_constants_.md#gl_draw_buffer11_webgl)
* [GL_DRAW_BUFFER12](_src_js_gpx_webgl_constants_.md#gl_draw_buffer12)
* [GL_DRAW_BUFFER12_WEBGL](_src_js_gpx_webgl_constants_.md#gl_draw_buffer12_webgl)
* [GL_DRAW_BUFFER13](_src_js_gpx_webgl_constants_.md#gl_draw_buffer13)
* [GL_DRAW_BUFFER13_WEBGL](_src_js_gpx_webgl_constants_.md#gl_draw_buffer13_webgl)
* [GL_DRAW_BUFFER14](_src_js_gpx_webgl_constants_.md#gl_draw_buffer14)
* [GL_DRAW_BUFFER14_WEBGL](_src_js_gpx_webgl_constants_.md#gl_draw_buffer14_webgl)
* [GL_DRAW_BUFFER15](_src_js_gpx_webgl_constants_.md#gl_draw_buffer15)
* [GL_DRAW_BUFFER15_WEBGL](_src_js_gpx_webgl_constants_.md#gl_draw_buffer15_webgl)
* [GL_DRAW_BUFFER1_WEBGL](_src_js_gpx_webgl_constants_.md#gl_draw_buffer1_webgl)
* [GL_DRAW_BUFFER2](_src_js_gpx_webgl_constants_.md#gl_draw_buffer2)
* [GL_DRAW_BUFFER2_WEBGL](_src_js_gpx_webgl_constants_.md#gl_draw_buffer2_webgl)
* [GL_DRAW_BUFFER3](_src_js_gpx_webgl_constants_.md#gl_draw_buffer3)
* [GL_DRAW_BUFFER3_WEBGL](_src_js_gpx_webgl_constants_.md#gl_draw_buffer3_webgl)
* [GL_DRAW_BUFFER4](_src_js_gpx_webgl_constants_.md#gl_draw_buffer4)
* [GL_DRAW_BUFFER4_WEBGL](_src_js_gpx_webgl_constants_.md#gl_draw_buffer4_webgl)
* [GL_DRAW_BUFFER5](_src_js_gpx_webgl_constants_.md#gl_draw_buffer5)
* [GL_DRAW_BUFFER5_WEBGL](_src_js_gpx_webgl_constants_.md#gl_draw_buffer5_webgl)
* [GL_DRAW_BUFFER6](_src_js_gpx_webgl_constants_.md#gl_draw_buffer6)
* [GL_DRAW_BUFFER6_WEBGL](_src_js_gpx_webgl_constants_.md#gl_draw_buffer6_webgl)
* [GL_DRAW_BUFFER7](_src_js_gpx_webgl_constants_.md#gl_draw_buffer7)
* [GL_DRAW_BUFFER7_WEBGL](_src_js_gpx_webgl_constants_.md#gl_draw_buffer7_webgl)
* [GL_DRAW_BUFFER8](_src_js_gpx_webgl_constants_.md#gl_draw_buffer8)
* [GL_DRAW_BUFFER8_WEBGL](_src_js_gpx_webgl_constants_.md#gl_draw_buffer8_webgl)
* [GL_DRAW_BUFFER9](_src_js_gpx_webgl_constants_.md#gl_draw_buffer9)
* [GL_DRAW_BUFFER9_WEBGL](_src_js_gpx_webgl_constants_.md#gl_draw_buffer9_webgl)
* [GL_DRAW_FRAMEBUFFER](_src_js_gpx_webgl_constants_.md#gl_draw_framebuffer)
* [GL_DRAW_FRAMEBUFFER_BINDING](_src_js_gpx_webgl_constants_.md#gl_draw_framebuffer_binding)
* [GL_DST_ALPHA](_src_js_gpx_webgl_constants_.md#gl_dst_alpha)
* [GL_DST_COLOR](_src_js_gpx_webgl_constants_.md#gl_dst_color)
* [GL_DYNAMIC_COPY](_src_js_gpx_webgl_constants_.md#gl_dynamic_copy)
* [GL_DYNAMIC_DRAW](_src_js_gpx_webgl_constants_.md#gl_dynamic_draw)
* [GL_DYNAMIC_READ](_src_js_gpx_webgl_constants_.md#gl_dynamic_read)
* [GL_ELEMENT_ARRAY_BUFFER](_src_js_gpx_webgl_constants_.md#gl_element_array_buffer)
* [GL_ELEMENT_ARRAY_BUFFER_BINDING](_src_js_gpx_webgl_constants_.md#gl_element_array_buffer_binding)
* [GL_EQUAL](_src_js_gpx_webgl_constants_.md#gl_equal)
* [GL_FASTEST](_src_js_gpx_webgl_constants_.md#gl_fastest)
* [GL_FLOAT](_src_js_gpx_webgl_constants_.md#gl_float)
* [GL_FLOAT_32_UNSIGNED_INT_24_8_REV](_src_js_gpx_webgl_constants_.md#gl_float_32_unsigned_int_24_8_rev)
* [GL_FLOAT_MAT2](_src_js_gpx_webgl_constants_.md#gl_float_mat2)
* [GL_FLOAT_MAT2X3](_src_js_gpx_webgl_constants_.md#gl_float_mat2x3)
* [GL_FLOAT_MAT2X4](_src_js_gpx_webgl_constants_.md#gl_float_mat2x4)
* [GL_FLOAT_MAT3](_src_js_gpx_webgl_constants_.md#gl_float_mat3)
* [GL_FLOAT_MAT3X2](_src_js_gpx_webgl_constants_.md#gl_float_mat3x2)
* [GL_FLOAT_MAT3X4](_src_js_gpx_webgl_constants_.md#gl_float_mat3x4)
* [GL_FLOAT_MAT4](_src_js_gpx_webgl_constants_.md#gl_float_mat4)
* [GL_FLOAT_MAT4X2](_src_js_gpx_webgl_constants_.md#gl_float_mat4x2)
* [GL_FLOAT_MAT4X3](_src_js_gpx_webgl_constants_.md#gl_float_mat4x3)
* [GL_FLOAT_VEC2](_src_js_gpx_webgl_constants_.md#gl_float_vec2)
* [GL_FLOAT_VEC3](_src_js_gpx_webgl_constants_.md#gl_float_vec3)
* [GL_FLOAT_VEC4](_src_js_gpx_webgl_constants_.md#gl_float_vec4)
* [GL_FRAGMENT_SHADER](_src_js_gpx_webgl_constants_.md#gl_fragment_shader)
* [GL_FRAGMENT_SHADER_DERIVATIVE_HINT](_src_js_gpx_webgl_constants_.md#gl_fragment_shader_derivative_hint)
* [GL_FRAGMENT_SHADER_DERIVATIVE_HINT_OES](_src_js_gpx_webgl_constants_.md#gl_fragment_shader_derivative_hint_oes)
* [GL_FRAMEBUFFER](_src_js_gpx_webgl_constants_.md#gl_framebuffer)
* [GL_FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE](_src_js_gpx_webgl_constants_.md#gl_framebuffer_attachment_alpha_size)
* [GL_FRAMEBUFFER_ATTACHMENT_BLUE_SIZE](_src_js_gpx_webgl_constants_.md#gl_framebuffer_attachment_blue_size)
* [GL_FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING](_src_js_gpx_webgl_constants_.md#gl_framebuffer_attachment_color_encoding)
* [GL_FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING_EXT](_src_js_gpx_webgl_constants_.md#gl_framebuffer_attachment_color_encoding_ext)
* [GL_FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE](_src_js_gpx_webgl_constants_.md#gl_framebuffer_attachment_component_type)
* [GL_FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT](_src_js_gpx_webgl_constants_.md#gl_framebuffer_attachment_component_type_ext)
* [GL_FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE](_src_js_gpx_webgl_constants_.md#gl_framebuffer_attachment_depth_size)
* [GL_FRAMEBUFFER_ATTACHMENT_GREEN_SIZE](_src_js_gpx_webgl_constants_.md#gl_framebuffer_attachment_green_size)
* [GL_FRAMEBUFFER_ATTACHMENT_OBJECT_NAME](_src_js_gpx_webgl_constants_.md#gl_framebuffer_attachment_object_name)
* [GL_FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE](_src_js_gpx_webgl_constants_.md#gl_framebuffer_attachment_object_type)
* [GL_FRAMEBUFFER_ATTACHMENT_RED_SIZE](_src_js_gpx_webgl_constants_.md#gl_framebuffer_attachment_red_size)
* [GL_FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE](_src_js_gpx_webgl_constants_.md#gl_framebuffer_attachment_stencil_size)
* [GL_FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE](_src_js_gpx_webgl_constants_.md#gl_framebuffer_attachment_texture_cube_map_face)
* [GL_FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER](_src_js_gpx_webgl_constants_.md#gl_framebuffer_attachment_texture_layer)
* [GL_FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL](_src_js_gpx_webgl_constants_.md#gl_framebuffer_attachment_texture_level)
* [GL_FRAMEBUFFER_BINDING](_src_js_gpx_webgl_constants_.md#gl_framebuffer_binding)
* [GL_FRAMEBUFFER_COMPLETE](_src_js_gpx_webgl_constants_.md#gl_framebuffer_complete)
* [GL_FRAMEBUFFER_DEFAULT](_src_js_gpx_webgl_constants_.md#gl_framebuffer_default)
* [GL_FRAMEBUFFER_INCOMPLETE_ATTACHMENT](_src_js_gpx_webgl_constants_.md#gl_framebuffer_incomplete_attachment)
* [GL_FRAMEBUFFER_INCOMPLETE_DIMENSIONS](_src_js_gpx_webgl_constants_.md#gl_framebuffer_incomplete_dimensions)
* [GL_FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT](_src_js_gpx_webgl_constants_.md#gl_framebuffer_incomplete_missing_attachment)
* [GL_FRAMEBUFFER_INCOMPLETE_MULTISAMPLE](_src_js_gpx_webgl_constants_.md#gl_framebuffer_incomplete_multisample)
* [GL_FRAMEBUFFER_UNSUPPORTED](_src_js_gpx_webgl_constants_.md#gl_framebuffer_unsupported)
* [GL_FRONT](_src_js_gpx_webgl_constants_.md#gl_front)
* [GL_FRONT_AND_BACK](_src_js_gpx_webgl_constants_.md#gl_front_and_back)
* [GL_FRONT_FACE](_src_js_gpx_webgl_constants_.md#gl_front_face)
* [GL_FUNC_ADD](_src_js_gpx_webgl_constants_.md#gl_func_add)
* [GL_FUNC_REVERSE_SUBTRACT](_src_js_gpx_webgl_constants_.md#gl_func_reverse_subtract)
* [GL_FUNC_SUBSTRACT](_src_js_gpx_webgl_constants_.md#gl_func_substract)
* [GL_GENERATE_MIPMAP_HINT](_src_js_gpx_webgl_constants_.md#gl_generate_mipmap_hint)
* [GL_GEQUAL](_src_js_gpx_webgl_constants_.md#gl_gequal)
* [GL_GPU_DISJOINT_EXT](_src_js_gpx_webgl_constants_.md#gl_gpu_disjoint_ext)
* [GL_GREATER](_src_js_gpx_webgl_constants_.md#gl_greater)
* [GL_GREEN_BITS](_src_js_gpx_webgl_constants_.md#gl_green_bits)
* [GL_HALF_FLOAT](_src_js_gpx_webgl_constants_.md#gl_half_float)
* [GL_HALF_FLOAT_OES](_src_js_gpx_webgl_constants_.md#gl_half_float_oes)
* [GL_HIGH_FLOAT](_src_js_gpx_webgl_constants_.md#gl_high_float)
* [GL_HIGH_INT](_src_js_gpx_webgl_constants_.md#gl_high_int)
* [GL_IMPLEMENTATION_COLOR_READ_FORMAT](_src_js_gpx_webgl_constants_.md#gl_implementation_color_read_format)
* [GL_IMPLEMENTATION_COLOR_READ_TYPE](_src_js_gpx_webgl_constants_.md#gl_implementation_color_read_type)
* [GL_INCR](_src_js_gpx_webgl_constants_.md#gl_incr)
* [GL_INCR_WRAP](_src_js_gpx_webgl_constants_.md#gl_incr_wrap)
* [GL_INT](_src_js_gpx_webgl_constants_.md#gl_int)
* [GL_INTERLEAVED_ATTRIBS](_src_js_gpx_webgl_constants_.md#gl_interleaved_attribs)
* [GL_INT_2_10_10_10_REV](_src_js_gpx_webgl_constants_.md#gl_int_2_10_10_10_rev)
* [GL_INT_SAMPLER_2D](_src_js_gpx_webgl_constants_.md#gl_int_sampler_2d)
* [GL_INT_SAMPLER_2D_ARRAY](_src_js_gpx_webgl_constants_.md#gl_int_sampler_2d_array)
* [GL_INT_SAMPLER_3D](_src_js_gpx_webgl_constants_.md#gl_int_sampler_3d)
* [GL_INT_SAMPLER_CUBE](_src_js_gpx_webgl_constants_.md#gl_int_sampler_cube)
* [GL_INT_VEC2](_src_js_gpx_webgl_constants_.md#gl_int_vec2)
* [GL_INT_VEC3](_src_js_gpx_webgl_constants_.md#gl_int_vec3)
* [GL_INT_VEC4](_src_js_gpx_webgl_constants_.md#gl_int_vec4)
* [GL_INVALID_ENUM](_src_js_gpx_webgl_constants_.md#gl_invalid_enum)
* [GL_INVALID_FRAMEBUFFER_OPERATION](_src_js_gpx_webgl_constants_.md#gl_invalid_framebuffer_operation)
* [GL_INVALID_INDEX](_src_js_gpx_webgl_constants_.md#gl_invalid_index)
* [GL_INVALID_OPERATION](_src_js_gpx_webgl_constants_.md#gl_invalid_operation)
* [GL_INVALID_VALUE](_src_js_gpx_webgl_constants_.md#gl_invalid_value)
* [GL_INVERT](_src_js_gpx_webgl_constants_.md#gl_invert)
* [GL_KEEP](_src_js_gpx_webgl_constants_.md#gl_keep)
* [GL_LEQUAL](_src_js_gpx_webgl_constants_.md#gl_lequal)
* [GL_LESS](_src_js_gpx_webgl_constants_.md#gl_less)
* [GL_LINEAR](_src_js_gpx_webgl_constants_.md#gl_linear)
* [GL_LINEAR_MIPMAP_LINEAR](_src_js_gpx_webgl_constants_.md#gl_linear_mipmap_linear)
* [GL_LINEAR_MIPMAP_NEAREST](_src_js_gpx_webgl_constants_.md#gl_linear_mipmap_nearest)
* [GL_LINES](_src_js_gpx_webgl_constants_.md#gl_lines)
* [GL_LINE_LOOP](_src_js_gpx_webgl_constants_.md#gl_line_loop)
* [GL_LINE_STRIP](_src_js_gpx_webgl_constants_.md#gl_line_strip)
* [GL_LINE_WIDTH](_src_js_gpx_webgl_constants_.md#gl_line_width)
* [GL_LINK_STATUS](_src_js_gpx_webgl_constants_.md#gl_link_status)
* [GL_LOW_FLOAT](_src_js_gpx_webgl_constants_.md#gl_low_float)
* [GL_LOW_INT](_src_js_gpx_webgl_constants_.md#gl_low_int)
* [GL_LUMINANCE](_src_js_gpx_webgl_constants_.md#gl_luminance)
* [GL_LUMINANCE_ALPHA](_src_js_gpx_webgl_constants_.md#gl_luminance_alpha)
* [GL_MAX](_src_js_gpx_webgl_constants_.md#gl_max)
* [GL_MAX_3D_TEXTURE_SIZE](_src_js_gpx_webgl_constants_.md#gl_max_3d_texture_size)
* [GL_MAX_ARRAY_TEXTURE_LAYERS](_src_js_gpx_webgl_constants_.md#gl_max_array_texture_layers)
* [GL_MAX_CLIENT_WAIT_TIMEOUT_WEBGL](_src_js_gpx_webgl_constants_.md#gl_max_client_wait_timeout_webgl)
* [GL_MAX_COLOR_ATTACHMENTS](_src_js_gpx_webgl_constants_.md#gl_max_color_attachments)
* [GL_MAX_COLOR_ATTACHMENTS_WEBGL](_src_js_gpx_webgl_constants_.md#gl_max_color_attachments_webgl)
* [GL_MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS](_src_js_gpx_webgl_constants_.md#gl_max_combined_fragment_uniform_components)
* [GL_MAX_COMBINED_TEXTURE_IMAGE_UNITS](_src_js_gpx_webgl_constants_.md#gl_max_combined_texture_image_units)
* [GL_MAX_COMBINED_UNIFORM_BLOCKS](_src_js_gpx_webgl_constants_.md#gl_max_combined_uniform_blocks)
* [GL_MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS](_src_js_gpx_webgl_constants_.md#gl_max_combined_vertex_uniform_components)
* [GL_MAX_CUBE_MAP_TEXTURE_SIZE](_src_js_gpx_webgl_constants_.md#gl_max_cube_map_texture_size)
* [GL_MAX_DRAW_BUFFERS](_src_js_gpx_webgl_constants_.md#gl_max_draw_buffers)
* [GL_MAX_DRAW_BUFFERS_WEBGL](_src_js_gpx_webgl_constants_.md#gl_max_draw_buffers_webgl)
* [GL_MAX_ELEMENTS_INDICES](_src_js_gpx_webgl_constants_.md#gl_max_elements_indices)
* [GL_MAX_ELEMENTS_VERTICES](_src_js_gpx_webgl_constants_.md#gl_max_elements_vertices)
* [GL_MAX_ELEMENT_INDEX](_src_js_gpx_webgl_constants_.md#gl_max_element_index)
* [GL_MAX_EXT](_src_js_gpx_webgl_constants_.md#gl_max_ext)
* [GL_MAX_FRAGMENT_INPUT_COMPONENTS](_src_js_gpx_webgl_constants_.md#gl_max_fragment_input_components)
* [GL_MAX_FRAGMENT_UNIFORM_BLOCKS](_src_js_gpx_webgl_constants_.md#gl_max_fragment_uniform_blocks)
* [GL_MAX_FRAGMENT_UNIFORM_COMPONENTS](_src_js_gpx_webgl_constants_.md#gl_max_fragment_uniform_components)
* [GL_MAX_FRAGMENT_UNIFORM_VECTORS](_src_js_gpx_webgl_constants_.md#gl_max_fragment_uniform_vectors)
* [GL_MAX_PROGRAM_TEXEL_OFFSET](_src_js_gpx_webgl_constants_.md#gl_max_program_texel_offset)
* [GL_MAX_RENDERBUFFER_SIZE](_src_js_gpx_webgl_constants_.md#gl_max_renderbuffer_size)
* [GL_MAX_SAMPLES](_src_js_gpx_webgl_constants_.md#gl_max_samples)
* [GL_MAX_SERVER_WAIT_TIMEOUT](_src_js_gpx_webgl_constants_.md#gl_max_server_wait_timeout)
* [GL_MAX_TEXTURE_IMAGE_UNITS](_src_js_gpx_webgl_constants_.md#gl_max_texture_image_units)
* [GL_MAX_TEXTURE_LOD_BIAS](_src_js_gpx_webgl_constants_.md#gl_max_texture_lod_bias)
* [GL_MAX_TEXTURE_MAX_ANISOTROPY_EXT](_src_js_gpx_webgl_constants_.md#gl_max_texture_max_anisotropy_ext)
* [GL_MAX_TEXTURE_SIZE](_src_js_gpx_webgl_constants_.md#gl_max_texture_size)
* [GL_MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS](_src_js_gpx_webgl_constants_.md#gl_max_transform_feedback_interleaved_components)
* [GL_MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS](_src_js_gpx_webgl_constants_.md#gl_max_transform_feedback_separate_attribs)
* [GL_MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS](_src_js_gpx_webgl_constants_.md#gl_max_transform_feedback_separate_components)
* [GL_MAX_UNIFORM_BLOCK_SIZE](_src_js_gpx_webgl_constants_.md#gl_max_uniform_block_size)
* [GL_MAX_UNIFORM_BUFFER_BINDINGS](_src_js_gpx_webgl_constants_.md#gl_max_uniform_buffer_bindings)
* [GL_MAX_VARYING_COMPONENTS](_src_js_gpx_webgl_constants_.md#gl_max_varying_components)
* [GL_MAX_VARYING_VECTORS](_src_js_gpx_webgl_constants_.md#gl_max_varying_vectors)
* [GL_MAX_VERTEX_ATTRIBS](_src_js_gpx_webgl_constants_.md#gl_max_vertex_attribs)
* [GL_MAX_VERTEX_OUTPUT_COMPONENTS](_src_js_gpx_webgl_constants_.md#gl_max_vertex_output_components)
* [GL_MAX_VERTEX_TEXTURE_IMAGE_UNITS](_src_js_gpx_webgl_constants_.md#gl_max_vertex_texture_image_units)
* [GL_MAX_VERTEX_UNIFORM_BLOCKS](_src_js_gpx_webgl_constants_.md#gl_max_vertex_uniform_blocks)
* [GL_MAX_VERTEX_UNIFORM_COMPONENTS](_src_js_gpx_webgl_constants_.md#gl_max_vertex_uniform_components)
* [GL_MAX_VERTEX_UNIFORM_VECTORS](_src_js_gpx_webgl_constants_.md#gl_max_vertex_uniform_vectors)
* [GL_MAX_VIEWPORT_DIMS](_src_js_gpx_webgl_constants_.md#gl_max_viewport_dims)
* [GL_MEDIUM_FLOAT](_src_js_gpx_webgl_constants_.md#gl_medium_float)
* [GL_MEDIUM_INT](_src_js_gpx_webgl_constants_.md#gl_medium_int)
* [GL_MIN](_src_js_gpx_webgl_constants_.md#gl_min)
* [GL_MIN_EXT](_src_js_gpx_webgl_constants_.md#gl_min_ext)
* [GL_MIN_PROGRAM_TEXEL_OFFSET](_src_js_gpx_webgl_constants_.md#gl_min_program_texel_offset)
* [GL_MIRRORED_REPEAT](_src_js_gpx_webgl_constants_.md#gl_mirrored_repeat)
* [GL_NEAREST](_src_js_gpx_webgl_constants_.md#gl_nearest)
* [GL_NEAREST_MIPMAP_LINEAR](_src_js_gpx_webgl_constants_.md#gl_nearest_mipmap_linear)
* [GL_NEAREST_MIPMAP_NEAREST](_src_js_gpx_webgl_constants_.md#gl_nearest_mipmap_nearest)
* [GL_NEVER](_src_js_gpx_webgl_constants_.md#gl_never)
* [GL_NICEST](_src_js_gpx_webgl_constants_.md#gl_nicest)
* [GL_NONE](_src_js_gpx_webgl_constants_.md#gl_none)
* [GL_NOTEQUAL](_src_js_gpx_webgl_constants_.md#gl_notequal)
* [GL_NO_ERROR](_src_js_gpx_webgl_constants_.md#gl_no_error)
* [GL_OBJECT_TYPE](_src_js_gpx_webgl_constants_.md#gl_object_type)
* [GL_ONE](_src_js_gpx_webgl_constants_.md#gl_one)
* [GL_ONE_MINUS_CONSTANT_ALPHA](_src_js_gpx_webgl_constants_.md#gl_one_minus_constant_alpha)
* [GL_ONE_MINUS_CONSTANT_COLOR](_src_js_gpx_webgl_constants_.md#gl_one_minus_constant_color)
* [GL_ONE_MINUS_DST_ALPHA](_src_js_gpx_webgl_constants_.md#gl_one_minus_dst_alpha)
* [GL_ONE_MINUS_DST_COLOR](_src_js_gpx_webgl_constants_.md#gl_one_minus_dst_color)
* [GL_ONE_MINUS_SRC_ALPHA](_src_js_gpx_webgl_constants_.md#gl_one_minus_src_alpha)
* [GL_ONE_MINUS_SRC_COLOR](_src_js_gpx_webgl_constants_.md#gl_one_minus_src_color)
* [GL_OUT_OF_MEMORY](_src_js_gpx_webgl_constants_.md#gl_out_of_memory)
* [GL_PACK_ALIGNMENT](_src_js_gpx_webgl_constants_.md#gl_pack_alignment)
* [GL_PACK_ROW_LENGTH](_src_js_gpx_webgl_constants_.md#gl_pack_row_length)
* [GL_PACK_SKIP_PIXELS](_src_js_gpx_webgl_constants_.md#gl_pack_skip_pixels)
* [GL_PACK_SKIP_ROWS](_src_js_gpx_webgl_constants_.md#gl_pack_skip_rows)
* [GL_PIXEL_PACK_BUFFER](_src_js_gpx_webgl_constants_.md#gl_pixel_pack_buffer)
* [GL_PIXEL_PACK_BUFFER_BINDING](_src_js_gpx_webgl_constants_.md#gl_pixel_pack_buffer_binding)
* [GL_PIXEL_UNPACK_BUFFER](_src_js_gpx_webgl_constants_.md#gl_pixel_unpack_buffer)
* [GL_PIXEL_UNPACK_BUFFER_BINDING](_src_js_gpx_webgl_constants_.md#gl_pixel_unpack_buffer_binding)
* [GL_POINTS](_src_js_gpx_webgl_constants_.md#gl_points)
* [GL_POLYGON_OFFSET_FACTOR](_src_js_gpx_webgl_constants_.md#gl_polygon_offset_factor)
* [GL_POLYGON_OFFSET_FILL](_src_js_gpx_webgl_constants_.md#gl_polygon_offset_fill)
* [GL_POLYGON_OFFSET_UNITS](_src_js_gpx_webgl_constants_.md#gl_polygon_offset_units)
* [GL_QUERY_COUNTER_BITS_EXT](_src_js_gpx_webgl_constants_.md#gl_query_counter_bits_ext)
* [GL_QUERY_RESULT](_src_js_gpx_webgl_constants_.md#gl_query_result)
* [GL_QUERY_RESULT_AVAILABLE](_src_js_gpx_webgl_constants_.md#gl_query_result_available)
* [GL_QUERY_RESULT_AVAILABLE_EXT](_src_js_gpx_webgl_constants_.md#gl_query_result_available_ext)
* [GL_QUERY_RESULT_EXT](_src_js_gpx_webgl_constants_.md#gl_query_result_ext)
* [GL_R11F_G11F_B10F](_src_js_gpx_webgl_constants_.md#gl_r11f_g11f_b10f)
* [GL_R16F](_src_js_gpx_webgl_constants_.md#gl_r16f)
* [GL_R16I](_src_js_gpx_webgl_constants_.md#gl_r16i)
* [GL_R16UI](_src_js_gpx_webgl_constants_.md#gl_r16ui)
* [GL_R32F](_src_js_gpx_webgl_constants_.md#gl_r32f)
* [GL_R32I](_src_js_gpx_webgl_constants_.md#gl_r32i)
* [GL_R32UI](_src_js_gpx_webgl_constants_.md#gl_r32ui)
* [GL_R8](_src_js_gpx_webgl_constants_.md#gl_r8)
* [GL_R8I](_src_js_gpx_webgl_constants_.md#gl_r8i)
* [GL_R8UI](_src_js_gpx_webgl_constants_.md#gl_r8ui)
* [GL_R8_SNORM](_src_js_gpx_webgl_constants_.md#gl_r8_snorm)
* [GL_RASTERIZER_DISCARD](_src_js_gpx_webgl_constants_.md#gl_rasterizer_discard)
* [GL_READ_BUFFER](_src_js_gpx_webgl_constants_.md#gl_read_buffer)
* [GL_READ_FRAMEBUFFER](_src_js_gpx_webgl_constants_.md#gl_read_framebuffer)
* [GL_READ_FRAMEBUFFER_BINDING](_src_js_gpx_webgl_constants_.md#gl_read_framebuffer_binding)
* [GL_RED](_src_js_gpx_webgl_constants_.md#gl_red)
* [GL_RED_BITS](_src_js_gpx_webgl_constants_.md#gl_red_bits)
* [GL_RED_INTEGER](_src_js_gpx_webgl_constants_.md#gl_red_integer)
* [GL_RENDERBUFFER](_src_js_gpx_webgl_constants_.md#gl_renderbuffer)
* [GL_RENDERBUFFER_ALPHA_SIZE](_src_js_gpx_webgl_constants_.md#gl_renderbuffer_alpha_size)
* [GL_RENDERBUFFER_BINDING](_src_js_gpx_webgl_constants_.md#gl_renderbuffer_binding)
* [GL_RENDERBUFFER_BLUE_SIZE](_src_js_gpx_webgl_constants_.md#gl_renderbuffer_blue_size)
* [GL_RENDERBUFFER_DEPTH_SIZE](_src_js_gpx_webgl_constants_.md#gl_renderbuffer_depth_size)
* [GL_RENDERBUFFER_GREEN_SIZE](_src_js_gpx_webgl_constants_.md#gl_renderbuffer_green_size)
* [GL_RENDERBUFFER_HEIGHT](_src_js_gpx_webgl_constants_.md#gl_renderbuffer_height)
* [GL_RENDERBUFFER_INTERNAL_FORMAT](_src_js_gpx_webgl_constants_.md#gl_renderbuffer_internal_format)
* [GL_RENDERBUFFER_RED_SIZE](_src_js_gpx_webgl_constants_.md#gl_renderbuffer_red_size)
* [GL_RENDERBUFFER_SAMPLES](_src_js_gpx_webgl_constants_.md#gl_renderbuffer_samples)
* [GL_RENDERBUFFER_STENCIL_SIZE](_src_js_gpx_webgl_constants_.md#gl_renderbuffer_stencil_size)
* [GL_RENDERBUFFER_WIDTH](_src_js_gpx_webgl_constants_.md#gl_renderbuffer_width)
* [GL_RENDERER](_src_js_gpx_webgl_constants_.md#gl_renderer)
* [GL_REPEAT](_src_js_gpx_webgl_constants_.md#gl_repeat)
* [GL_REPLACE](_src_js_gpx_webgl_constants_.md#gl_replace)
* [GL_RG](_src_js_gpx_webgl_constants_.md#gl_rg)
* [GL_RG16F](_src_js_gpx_webgl_constants_.md#gl_rg16f)
* [GL_RG16I](_src_js_gpx_webgl_constants_.md#gl_rg16i)
* [GL_RG16UI](_src_js_gpx_webgl_constants_.md#gl_rg16ui)
* [GL_RG32F](_src_js_gpx_webgl_constants_.md#gl_rg32f)
* [GL_RG32I](_src_js_gpx_webgl_constants_.md#gl_rg32i)
* [GL_RG32UI](_src_js_gpx_webgl_constants_.md#gl_rg32ui)
* [GL_RG8](_src_js_gpx_webgl_constants_.md#gl_rg8)
* [GL_RG8I](_src_js_gpx_webgl_constants_.md#gl_rg8i)
* [GL_RG8UI](_src_js_gpx_webgl_constants_.md#gl_rg8ui)
* [GL_RG8_SNORM](_src_js_gpx_webgl_constants_.md#gl_rg8_snorm)
* [GL_RGB](_src_js_gpx_webgl_constants_.md#gl_rgb)
* [GL_RGB10_A2](_src_js_gpx_webgl_constants_.md#gl_rgb10_a2)
* [GL_RGB10_A2UI](_src_js_gpx_webgl_constants_.md#gl_rgb10_a2ui)
* [GL_RGB16F](_src_js_gpx_webgl_constants_.md#gl_rgb16f)
* [GL_RGB16I](_src_js_gpx_webgl_constants_.md#gl_rgb16i)
* [GL_RGB16UI](_src_js_gpx_webgl_constants_.md#gl_rgb16ui)
* [GL_RGB32F](_src_js_gpx_webgl_constants_.md#gl_rgb32f)
* [GL_RGB32F_EXT](_src_js_gpx_webgl_constants_.md#gl_rgb32f_ext)
* [GL_RGB32I](_src_js_gpx_webgl_constants_.md#gl_rgb32i)
* [GL_RGB32UI](_src_js_gpx_webgl_constants_.md#gl_rgb32ui)
* [GL_RGB565](_src_js_gpx_webgl_constants_.md#gl_rgb565)
* [GL_RGB5_A1](_src_js_gpx_webgl_constants_.md#gl_rgb5_a1)
* [GL_RGB8](_src_js_gpx_webgl_constants_.md#gl_rgb8)
* [GL_RGB8I](_src_js_gpx_webgl_constants_.md#gl_rgb8i)
* [GL_RGB8UI](_src_js_gpx_webgl_constants_.md#gl_rgb8ui)
* [GL_RGB8_SNORM](_src_js_gpx_webgl_constants_.md#gl_rgb8_snorm)
* [GL_RGB9_E5](_src_js_gpx_webgl_constants_.md#gl_rgb9_e5)
* [GL_RGBA](_src_js_gpx_webgl_constants_.md#gl_rgba)
* [GL_RGBA16F](_src_js_gpx_webgl_constants_.md#gl_rgba16f)
* [GL_RGBA16I](_src_js_gpx_webgl_constants_.md#gl_rgba16i)
* [GL_RGBA16UI](_src_js_gpx_webgl_constants_.md#gl_rgba16ui)
* [GL_RGBA32F](_src_js_gpx_webgl_constants_.md#gl_rgba32f)
* [GL_RGBA32F_EXT](_src_js_gpx_webgl_constants_.md#gl_rgba32f_ext)
* [GL_RGBA32I](_src_js_gpx_webgl_constants_.md#gl_rgba32i)
* [GL_RGBA32UI](_src_js_gpx_webgl_constants_.md#gl_rgba32ui)
* [GL_RGBA4](_src_js_gpx_webgl_constants_.md#gl_rgba4)
* [GL_RGBA8](_src_js_gpx_webgl_constants_.md#gl_rgba8)
* [GL_RGBA8I](_src_js_gpx_webgl_constants_.md#gl_rgba8i)
* [GL_RGBA8UI](_src_js_gpx_webgl_constants_.md#gl_rgba8ui)
* [GL_RGBA8_SNORM](_src_js_gpx_webgl_constants_.md#gl_rgba8_snorm)
* [GL_RGBA_INTEGER](_src_js_gpx_webgl_constants_.md#gl_rgba_integer)
* [GL_RGB_INTEGER](_src_js_gpx_webgl_constants_.md#gl_rgb_integer)
* [GL_RG_INTEGER](_src_js_gpx_webgl_constants_.md#gl_rg_integer)
* [GL_SAMPLER_2D](_src_js_gpx_webgl_constants_.md#gl_sampler_2d)
* [GL_SAMPLER_2D_ARRAY](_src_js_gpx_webgl_constants_.md#gl_sampler_2d_array)
* [GL_SAMPLER_2D_ARRAY_SHADOW](_src_js_gpx_webgl_constants_.md#gl_sampler_2d_array_shadow)
* [GL_SAMPLER_2D_SHADOW](_src_js_gpx_webgl_constants_.md#gl_sampler_2d_shadow)
* [GL_SAMPLER_3D](_src_js_gpx_webgl_constants_.md#gl_sampler_3d)
* [GL_SAMPLER_BINDING](_src_js_gpx_webgl_constants_.md#gl_sampler_binding)
* [GL_SAMPLER_CUBE](_src_js_gpx_webgl_constants_.md#gl_sampler_cube)
* [GL_SAMPLER_CUBE_SHADOW](_src_js_gpx_webgl_constants_.md#gl_sampler_cube_shadow)
* [GL_SAMPLES](_src_js_gpx_webgl_constants_.md#gl_samples)
* [GL_SAMPLE_ALPHA_TO_COVERAGE](_src_js_gpx_webgl_constants_.md#gl_sample_alpha_to_coverage)
* [GL_SAMPLE_BUFFERS](_src_js_gpx_webgl_constants_.md#gl_sample_buffers)
* [GL_SAMPLE_COVERAGE](_src_js_gpx_webgl_constants_.md#gl_sample_coverage)
* [GL_SAMPLE_COVERAGE_INVERT](_src_js_gpx_webgl_constants_.md#gl_sample_coverage_invert)
* [GL_SAMPLE_COVERAGE_VALUE](_src_js_gpx_webgl_constants_.md#gl_sample_coverage_value)
* [GL_SCISSOR_BOX](_src_js_gpx_webgl_constants_.md#gl_scissor_box)
* [GL_SCISSOR_TEST](_src_js_gpx_webgl_constants_.md#gl_scissor_test)
* [GL_SEPARATE_ATTRIBS](_src_js_gpx_webgl_constants_.md#gl_separate_attribs)
* [GL_SHADER_TYPE](_src_js_gpx_webgl_constants_.md#gl_shader_type)
* [GL_SHADING_LANGUAGE_VERSION](_src_js_gpx_webgl_constants_.md#gl_shading_language_version)
* [GL_SHORT](_src_js_gpx_webgl_constants_.md#gl_short)
* [GL_SIGNALED](_src_js_gpx_webgl_constants_.md#gl_signaled)
* [GL_SIGNED_NORMALIZED](_src_js_gpx_webgl_constants_.md#gl_signed_normalized)
* [GL_SRC_ALPHA](_src_js_gpx_webgl_constants_.md#gl_src_alpha)
* [GL_SRC_ALPHA_SATURATE](_src_js_gpx_webgl_constants_.md#gl_src_alpha_saturate)
* [GL_SRC_COLOR](_src_js_gpx_webgl_constants_.md#gl_src_color)
* [GL_SRGB](_src_js_gpx_webgl_constants_.md#gl_srgb)
* [GL_SRGB8](_src_js_gpx_webgl_constants_.md#gl_srgb8)
* [GL_SRGB8_ALPHA8](_src_js_gpx_webgl_constants_.md#gl_srgb8_alpha8)
* [GL_SRGB8_ALPHA8_EXT](_src_js_gpx_webgl_constants_.md#gl_srgb8_alpha8_ext)
* [GL_SRGB_ALPHA_EXT](_src_js_gpx_webgl_constants_.md#gl_srgb_alpha_ext)
* [GL_SRGB_EXT](_src_js_gpx_webgl_constants_.md#gl_srgb_ext)
* [GL_STATIC_COPY](_src_js_gpx_webgl_constants_.md#gl_static_copy)
* [GL_STATIC_DRAW](_src_js_gpx_webgl_constants_.md#gl_static_draw)
* [GL_STATIC_READ](_src_js_gpx_webgl_constants_.md#gl_static_read)
* [GL_STENCIL](_src_js_gpx_webgl_constants_.md#gl_stencil)
* [GL_STENCIL_ATTACHMENT](_src_js_gpx_webgl_constants_.md#gl_stencil_attachment)
* [GL_STENCIL_BACK_FAIL](_src_js_gpx_webgl_constants_.md#gl_stencil_back_fail)
* [GL_STENCIL_BACK_FUNC](_src_js_gpx_webgl_constants_.md#gl_stencil_back_func)
* [GL_STENCIL_BACK_PASS_DEPTH_FAIL](_src_js_gpx_webgl_constants_.md#gl_stencil_back_pass_depth_fail)
* [GL_STENCIL_BACK_PASS_DEPTH_PASS](_src_js_gpx_webgl_constants_.md#gl_stencil_back_pass_depth_pass)
* [GL_STENCIL_BACK_REF](_src_js_gpx_webgl_constants_.md#gl_stencil_back_ref)
* [GL_STENCIL_BACK_VALUE_MASK](_src_js_gpx_webgl_constants_.md#gl_stencil_back_value_mask)
* [GL_STENCIL_BACK_WRITEMASK](_src_js_gpx_webgl_constants_.md#gl_stencil_back_writemask)
* [GL_STENCIL_BITS](_src_js_gpx_webgl_constants_.md#gl_stencil_bits)
* [GL_STENCIL_BUFFER_BIT](_src_js_gpx_webgl_constants_.md#gl_stencil_buffer_bit)
* [GL_STENCIL_CLEAR_VALUE](_src_js_gpx_webgl_constants_.md#gl_stencil_clear_value)
* [GL_STENCIL_FAIL](_src_js_gpx_webgl_constants_.md#gl_stencil_fail)
* [GL_STENCIL_FUNC](_src_js_gpx_webgl_constants_.md#gl_stencil_func)
* [GL_STENCIL_INDEX](_src_js_gpx_webgl_constants_.md#gl_stencil_index)
* [GL_STENCIL_INDEX8](_src_js_gpx_webgl_constants_.md#gl_stencil_index8)
* [GL_STENCIL_PASS_DEPTH_FAIL](_src_js_gpx_webgl_constants_.md#gl_stencil_pass_depth_fail)
* [GL_STENCIL_PASS_DEPTH_PASS](_src_js_gpx_webgl_constants_.md#gl_stencil_pass_depth_pass)
* [GL_STENCIL_REF](_src_js_gpx_webgl_constants_.md#gl_stencil_ref)
* [GL_STENCIL_TEST](_src_js_gpx_webgl_constants_.md#gl_stencil_test)
* [GL_STENCIL_VALUE_MASK](_src_js_gpx_webgl_constants_.md#gl_stencil_value_mask)
* [GL_STENCIL_WRITEMASK](_src_js_gpx_webgl_constants_.md#gl_stencil_writemask)
* [GL_STREAM_COPY](_src_js_gpx_webgl_constants_.md#gl_stream_copy)
* [GL_STREAM_DRAW](_src_js_gpx_webgl_constants_.md#gl_stream_draw)
* [GL_STREAM_READ](_src_js_gpx_webgl_constants_.md#gl_stream_read)
* [GL_SUBPIXEL_BITS](_src_js_gpx_webgl_constants_.md#gl_subpixel_bits)
* [GL_SYNC_CONDITION](_src_js_gpx_webgl_constants_.md#gl_sync_condition)
* [GL_SYNC_FENCE](_src_js_gpx_webgl_constants_.md#gl_sync_fence)
* [GL_SYNC_FLAGS](_src_js_gpx_webgl_constants_.md#gl_sync_flags)
* [GL_SYNC_FLUSH_COMMANDS_BIT](_src_js_gpx_webgl_constants_.md#gl_sync_flush_commands_bit)
* [GL_SYNC_GPU_COMMANDS_COMPLETE](_src_js_gpx_webgl_constants_.md#gl_sync_gpu_commands_complete)
* [GL_SYNC_STATUS](_src_js_gpx_webgl_constants_.md#gl_sync_status)
* [GL_TEXTURE](_src_js_gpx_webgl_constants_.md#gl_texture)
* [GL_TEXTURE0](_src_js_gpx_webgl_constants_.md#gl_texture0)
* [GL_TEXTURE1](_src_js_gpx_webgl_constants_.md#gl_texture1)
* [GL_TEXTURE10](_src_js_gpx_webgl_constants_.md#gl_texture10)
* [GL_TEXTURE11](_src_js_gpx_webgl_constants_.md#gl_texture11)
* [GL_TEXTURE12](_src_js_gpx_webgl_constants_.md#gl_texture12)
* [GL_TEXTURE13](_src_js_gpx_webgl_constants_.md#gl_texture13)
* [GL_TEXTURE14](_src_js_gpx_webgl_constants_.md#gl_texture14)
* [GL_TEXTURE15](_src_js_gpx_webgl_constants_.md#gl_texture15)
* [GL_TEXTURE16](_src_js_gpx_webgl_constants_.md#gl_texture16)
* [GL_TEXTURE17](_src_js_gpx_webgl_constants_.md#gl_texture17)
* [GL_TEXTURE18](_src_js_gpx_webgl_constants_.md#gl_texture18)
* [GL_TEXTURE19](_src_js_gpx_webgl_constants_.md#gl_texture19)
* [GL_TEXTURE2](_src_js_gpx_webgl_constants_.md#gl_texture2)
* [GL_TEXTURE20](_src_js_gpx_webgl_constants_.md#gl_texture20)
* [GL_TEXTURE21](_src_js_gpx_webgl_constants_.md#gl_texture21)
* [GL_TEXTURE22](_src_js_gpx_webgl_constants_.md#gl_texture22)
* [GL_TEXTURE23](_src_js_gpx_webgl_constants_.md#gl_texture23)
* [GL_TEXTURE24](_src_js_gpx_webgl_constants_.md#gl_texture24)
* [GL_TEXTURE25](_src_js_gpx_webgl_constants_.md#gl_texture25)
* [GL_TEXTURE26](_src_js_gpx_webgl_constants_.md#gl_texture26)
* [GL_TEXTURE27](_src_js_gpx_webgl_constants_.md#gl_texture27)
* [GL_TEXTURE28](_src_js_gpx_webgl_constants_.md#gl_texture28)
* [GL_TEXTURE29](_src_js_gpx_webgl_constants_.md#gl_texture29)
* [GL_TEXTURE3](_src_js_gpx_webgl_constants_.md#gl_texture3)
* [GL_TEXTURE30](_src_js_gpx_webgl_constants_.md#gl_texture30)
* [GL_TEXTURE31](_src_js_gpx_webgl_constants_.md#gl_texture31)
* [GL_TEXTURE4](_src_js_gpx_webgl_constants_.md#gl_texture4)
* [GL_TEXTURE5](_src_js_gpx_webgl_constants_.md#gl_texture5)
* [GL_TEXTURE6](_src_js_gpx_webgl_constants_.md#gl_texture6)
* [GL_TEXTURE7](_src_js_gpx_webgl_constants_.md#gl_texture7)
* [GL_TEXTURE8](_src_js_gpx_webgl_constants_.md#gl_texture8)
* [GL_TEXTURE9](_src_js_gpx_webgl_constants_.md#gl_texture9)
* [GL_TEXTURE_2D](_src_js_gpx_webgl_constants_.md#gl_texture_2d)
* [GL_TEXTURE_2D_ARRAY](_src_js_gpx_webgl_constants_.md#gl_texture_2d_array)
* [GL_TEXTURE_3D](_src_js_gpx_webgl_constants_.md#gl_texture_3d)
* [GL_TEXTURE_BASE_LEVEL](_src_js_gpx_webgl_constants_.md#gl_texture_base_level)
* [GL_TEXTURE_BINDING_2D](_src_js_gpx_webgl_constants_.md#gl_texture_binding_2d)
* [GL_TEXTURE_BINDING_2D_ARRAY](_src_js_gpx_webgl_constants_.md#gl_texture_binding_2d_array)
* [GL_TEXTURE_BINDING_3D](_src_js_gpx_webgl_constants_.md#gl_texture_binding_3d)
* [GL_TEXTURE_BINDING_CUBE_MAP](_src_js_gpx_webgl_constants_.md#gl_texture_binding_cube_map)
* [GL_TEXTURE_COMPARE_FUNC](_src_js_gpx_webgl_constants_.md#gl_texture_compare_func)
* [GL_TEXTURE_COMPARE_MODE](_src_js_gpx_webgl_constants_.md#gl_texture_compare_mode)
* [GL_TEXTURE_CUBE_MAP](_src_js_gpx_webgl_constants_.md#gl_texture_cube_map)
* [GL_TEXTURE_CUBE_MAP_NEGATIVE_X](_src_js_gpx_webgl_constants_.md#gl_texture_cube_map_negative_x)
* [GL_TEXTURE_CUBE_MAP_NEGATIVE_Y](_src_js_gpx_webgl_constants_.md#gl_texture_cube_map_negative_y)
* [GL_TEXTURE_CUBE_MAP_NEGATIVE_Z](_src_js_gpx_webgl_constants_.md#gl_texture_cube_map_negative_z)
* [GL_TEXTURE_CUBE_MAP_POSITIVE_X](_src_js_gpx_webgl_constants_.md#gl_texture_cube_map_positive_x)
* [GL_TEXTURE_CUBE_MAP_POSITIVE_Y](_src_js_gpx_webgl_constants_.md#gl_texture_cube_map_positive_y)
* [GL_TEXTURE_CUBE_MAP_POSITIVE_Z](_src_js_gpx_webgl_constants_.md#gl_texture_cube_map_positive_z)
* [GL_TEXTURE_IMMUTABLE_FORMAT](_src_js_gpx_webgl_constants_.md#gl_texture_immutable_format)
* [GL_TEXTURE_IMMUTABLE_LEVELS](_src_js_gpx_webgl_constants_.md#gl_texture_immutable_levels)
* [GL_TEXTURE_MAG_FILTER](_src_js_gpx_webgl_constants_.md#gl_texture_mag_filter)
* [GL_TEXTURE_MAX_ANISOTROPY_EXT](_src_js_gpx_webgl_constants_.md#gl_texture_max_anisotropy_ext)
* [GL_TEXTURE_MAX_LEVEL](_src_js_gpx_webgl_constants_.md#gl_texture_max_level)
* [GL_TEXTURE_MAX_LOD](_src_js_gpx_webgl_constants_.md#gl_texture_max_lod)
* [GL_TEXTURE_MIN_FILTER](_src_js_gpx_webgl_constants_.md#gl_texture_min_filter)
* [GL_TEXTURE_MIN_LOD](_src_js_gpx_webgl_constants_.md#gl_texture_min_lod)
* [GL_TEXTURE_WRAP_R](_src_js_gpx_webgl_constants_.md#gl_texture_wrap_r)
* [GL_TEXTURE_WRAP_S](_src_js_gpx_webgl_constants_.md#gl_texture_wrap_s)
* [GL_TEXTURE_WRAP_T](_src_js_gpx_webgl_constants_.md#gl_texture_wrap_t)
* [GL_TIMEOUT_EXPIRED](_src_js_gpx_webgl_constants_.md#gl_timeout_expired)
* [GL_TIMEOUT_IGNORED](_src_js_gpx_webgl_constants_.md#gl_timeout_ignored)
* [GL_TIMESTAMP_EXT](_src_js_gpx_webgl_constants_.md#gl_timestamp_ext)
* [GL_TIME_ELAPSED_EXT](_src_js_gpx_webgl_constants_.md#gl_time_elapsed_ext)
* [GL_TRANSFORM_FEEDBACK](_src_js_gpx_webgl_constants_.md#gl_transform_feedback)
* [GL_TRANSFORM_FEEDBACK_ACTIVE](_src_js_gpx_webgl_constants_.md#gl_transform_feedback_active)
* [GL_TRANSFORM_FEEDBACK_BINDING](_src_js_gpx_webgl_constants_.md#gl_transform_feedback_binding)
* [GL_TRANSFORM_FEEDBACK_BUFFER](_src_js_gpx_webgl_constants_.md#gl_transform_feedback_buffer)
* [GL_TRANSFORM_FEEDBACK_BUFFER_BINDING](_src_js_gpx_webgl_constants_.md#gl_transform_feedback_buffer_binding)
* [GL_TRANSFORM_FEEDBACK_BUFFER_MODE](_src_js_gpx_webgl_constants_.md#gl_transform_feedback_buffer_mode)
* [GL_TRANSFORM_FEEDBACK_BUFFER_SIZE](_src_js_gpx_webgl_constants_.md#gl_transform_feedback_buffer_size)
* [GL_TRANSFORM_FEEDBACK_BUFFER_START](_src_js_gpx_webgl_constants_.md#gl_transform_feedback_buffer_start)
* [GL_TRANSFORM_FEEDBACK_PAUSED](_src_js_gpx_webgl_constants_.md#gl_transform_feedback_paused)
* [GL_TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN](_src_js_gpx_webgl_constants_.md#gl_transform_feedback_primitives_written)
* [GL_TRANSFORM_FEEDBACK_VARYINGS](_src_js_gpx_webgl_constants_.md#gl_transform_feedback_varyings)
* [GL_TRIANGLES](_src_js_gpx_webgl_constants_.md#gl_triangles)
* [GL_TRIANGLE_FAN](_src_js_gpx_webgl_constants_.md#gl_triangle_fan)
* [GL_TRIANGLE_STRIP](_src_js_gpx_webgl_constants_.md#gl_triangle_strip)
* [GL_UNIFORM_ARRAY_STRIDE](_src_js_gpx_webgl_constants_.md#gl_uniform_array_stride)
* [GL_UNIFORM_BLOCK_ACTIVE_UNIFORMS](_src_js_gpx_webgl_constants_.md#gl_uniform_block_active_uniforms)
* [GL_UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES](_src_js_gpx_webgl_constants_.md#gl_uniform_block_active_uniform_indices)
* [GL_UNIFORM_BLOCK_BINDING](_src_js_gpx_webgl_constants_.md#gl_uniform_block_binding)
* [GL_UNIFORM_BLOCK_DATA_SIZE](_src_js_gpx_webgl_constants_.md#gl_uniform_block_data_size)
* [GL_UNIFORM_BLOCK_INDEX](_src_js_gpx_webgl_constants_.md#gl_uniform_block_index)
* [GL_UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER](_src_js_gpx_webgl_constants_.md#gl_uniform_block_referenced_by_fragment_shader)
* [GL_UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER](_src_js_gpx_webgl_constants_.md#gl_uniform_block_referenced_by_vertex_shader)
* [GL_UNIFORM_BUFFER](_src_js_gpx_webgl_constants_.md#gl_uniform_buffer)
* [GL_UNIFORM_BUFFER_BINDING](_src_js_gpx_webgl_constants_.md#gl_uniform_buffer_binding)
* [GL_UNIFORM_BUFFER_OFFSET_ALIGNMENT](_src_js_gpx_webgl_constants_.md#gl_uniform_buffer_offset_alignment)
* [GL_UNIFORM_BUFFER_SIZE](_src_js_gpx_webgl_constants_.md#gl_uniform_buffer_size)
* [GL_UNIFORM_BUFFER_START](_src_js_gpx_webgl_constants_.md#gl_uniform_buffer_start)
* [GL_UNIFORM_IS_ROW_MAJOR](_src_js_gpx_webgl_constants_.md#gl_uniform_is_row_major)
* [GL_UNIFORM_MATRIX_STRIDE](_src_js_gpx_webgl_constants_.md#gl_uniform_matrix_stride)
* [GL_UNIFORM_OFFSET](_src_js_gpx_webgl_constants_.md#gl_uniform_offset)
* [GL_UNIFORM_SIZE](_src_js_gpx_webgl_constants_.md#gl_uniform_size)
* [GL_UNIFORM_TYPE](_src_js_gpx_webgl_constants_.md#gl_uniform_type)
* [GL_UNMASKED_RENDERER_WEBGL](_src_js_gpx_webgl_constants_.md#gl_unmasked_renderer_webgl)
* [GL_UNMASKED_VENDOR_WEBGL](_src_js_gpx_webgl_constants_.md#gl_unmasked_vendor_webgl)
* [GL_UNPACK_ALIGNMENT](_src_js_gpx_webgl_constants_.md#gl_unpack_alignment)
* [GL_UNPACK_COLORSPACE_CONVERSION_WEBGL](_src_js_gpx_webgl_constants_.md#gl_unpack_colorspace_conversion_webgl)
* [GL_UNPACK_FLIP_Y_WEBGL](_src_js_gpx_webgl_constants_.md#gl_unpack_flip_y_webgl)
* [GL_UNPACK_IMAGE_HEIGHT](_src_js_gpx_webgl_constants_.md#gl_unpack_image_height)
* [GL_UNPACK_PREMULTIPLY_ALPHA_WEBGL](_src_js_gpx_webgl_constants_.md#gl_unpack_premultiply_alpha_webgl)
* [GL_UNPACK_ROW_LENGTH](_src_js_gpx_webgl_constants_.md#gl_unpack_row_length)
* [GL_UNPACK_SKIP_IMAGES](_src_js_gpx_webgl_constants_.md#gl_unpack_skip_images)
* [GL_UNPACK_SKIP_PIXELS](_src_js_gpx_webgl_constants_.md#gl_unpack_skip_pixels)
* [GL_UNPACK_SKIP_ROWS](_src_js_gpx_webgl_constants_.md#gl_unpack_skip_rows)
* [GL_UNSIGNALED](_src_js_gpx_webgl_constants_.md#gl_unsignaled)
* [GL_UNSIGNED_BYTE](_src_js_gpx_webgl_constants_.md#gl_unsigned_byte)
* [GL_UNSIGNED_INT](_src_js_gpx_webgl_constants_.md#gl_unsigned_int)
* [GL_UNSIGNED_INT_10F_11F_11F_REV](_src_js_gpx_webgl_constants_.md#gl_unsigned_int_10f_11f_11f_rev)
* [GL_UNSIGNED_INT_24_8](_src_js_gpx_webgl_constants_.md#gl_unsigned_int_24_8)
* [GL_UNSIGNED_INT_24_8_WEBGL](_src_js_gpx_webgl_constants_.md#gl_unsigned_int_24_8_webgl)
* [GL_UNSIGNED_INT_2_10_10_10_REV](_src_js_gpx_webgl_constants_.md#gl_unsigned_int_2_10_10_10_rev)
* [GL_UNSIGNED_INT_5_9_9_9_REV](_src_js_gpx_webgl_constants_.md#gl_unsigned_int_5_9_9_9_rev)
* [GL_UNSIGNED_INT_SAMPLER_2D](_src_js_gpx_webgl_constants_.md#gl_unsigned_int_sampler_2d)
* [GL_UNSIGNED_INT_SAMPLER_2D_ARRAY](_src_js_gpx_webgl_constants_.md#gl_unsigned_int_sampler_2d_array)
* [GL_UNSIGNED_INT_SAMPLER_3D](_src_js_gpx_webgl_constants_.md#gl_unsigned_int_sampler_3d)
* [GL_UNSIGNED_INT_SAMPLER_CUBE](_src_js_gpx_webgl_constants_.md#gl_unsigned_int_sampler_cube)
* [GL_UNSIGNED_INT_VEC2](_src_js_gpx_webgl_constants_.md#gl_unsigned_int_vec2)
* [GL_UNSIGNED_INT_VEC3](_src_js_gpx_webgl_constants_.md#gl_unsigned_int_vec3)
* [GL_UNSIGNED_INT_VEC4](_src_js_gpx_webgl_constants_.md#gl_unsigned_int_vec4)
* [GL_UNSIGNED_NORMALIZED](_src_js_gpx_webgl_constants_.md#gl_unsigned_normalized)
* [GL_UNSIGNED_NORMALIZED_EXT](_src_js_gpx_webgl_constants_.md#gl_unsigned_normalized_ext)
* [GL_UNSIGNED_SHORT](_src_js_gpx_webgl_constants_.md#gl_unsigned_short)
* [GL_UNSIGNED_SHORT_4_4_4_4](_src_js_gpx_webgl_constants_.md#gl_unsigned_short_4_4_4_4)
* [GL_UNSIGNED_SHORT_5_5_5_1](_src_js_gpx_webgl_constants_.md#gl_unsigned_short_5_5_5_1)
* [GL_UNSIGNED_SHORT_5_6_5](_src_js_gpx_webgl_constants_.md#gl_unsigned_short_5_6_5)
* [GL_VALIDATE_STATUS](_src_js_gpx_webgl_constants_.md#gl_validate_status)
* [GL_VENDOR](_src_js_gpx_webgl_constants_.md#gl_vendor)
* [GL_VERSION](_src_js_gpx_webgl_constants_.md#gl_version)
* [GL_VERTEX_ARRAY_BINDING](_src_js_gpx_webgl_constants_.md#gl_vertex_array_binding)
* [GL_VERTEX_ARRAY_BINDING_OES](_src_js_gpx_webgl_constants_.md#gl_vertex_array_binding_oes)
* [GL_VERTEX_ATTRIB_ARRAY_BUFFER_BINDING](_src_js_gpx_webgl_constants_.md#gl_vertex_attrib_array_buffer_binding)
* [GL_VERTEX_ATTRIB_ARRAY_DIVISOR](_src_js_gpx_webgl_constants_.md#gl_vertex_attrib_array_divisor)
* [GL_VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE](_src_js_gpx_webgl_constants_.md#gl_vertex_attrib_array_divisor_angle)
* [GL_VERTEX_ATTRIB_ARRAY_ENABLED](_src_js_gpx_webgl_constants_.md#gl_vertex_attrib_array_enabled)
* [GL_VERTEX_ATTRIB_ARRAY_INTEGER](_src_js_gpx_webgl_constants_.md#gl_vertex_attrib_array_integer)
* [GL_VERTEX_ATTRIB_ARRAY_NORMALIZED](_src_js_gpx_webgl_constants_.md#gl_vertex_attrib_array_normalized)
* [GL_VERTEX_ATTRIB_ARRAY_POINTER](_src_js_gpx_webgl_constants_.md#gl_vertex_attrib_array_pointer)
* [GL_VERTEX_ATTRIB_ARRAY_SIZE](_src_js_gpx_webgl_constants_.md#gl_vertex_attrib_array_size)
* [GL_VERTEX_ATTRIB_ARRAY_STRIDE](_src_js_gpx_webgl_constants_.md#gl_vertex_attrib_array_stride)
* [GL_VERTEX_ATTRIB_ARRAY_TYPE](_src_js_gpx_webgl_constants_.md#gl_vertex_attrib_array_type)
* [GL_VERTEX_SHADER](_src_js_gpx_webgl_constants_.md#gl_vertex_shader)
* [GL_VIEWPORT](_src_js_gpx_webgl_constants_.md#gl_viewport)
* [GL_WAIT_FAILED](_src_js_gpx_webgl_constants_.md#gl_wait_failed)
* [GL_ZERO](_src_js_gpx_webgl_constants_.md#gl_zero)

## Type aliases

###  GL_ACTIVE_ATTRIBUTES

Ƭ **GL_ACTIVE_ATTRIBUTES**: *35721*

*Defined in [src/js/GPX/webgl/constants.ts:924](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L924)*

Passed to getProgramParameter to get the number of attributes active in a program

**`constant`** {number}

___

###  GL_ACTIVE_TEXTURE

Ƭ **GL_ACTIVE_TEXTURE**: *34016*

*Defined in [src/js/GPX/webgl/constants.ts:1377](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1377)*

The current active texture unit

**`constant`** {number}

___

###  GL_ACTIVE_UNIFORMS

Ƭ **GL_ACTIVE_UNIFORMS**: *35718*

*Defined in [src/js/GPX/webgl/constants.ts:930](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L930)*

Passed to getProgramParamter to get the number of uniforms active in a program

**`constant`** {number}

___

###  GL_ACTIVE_UNIFORM_BLOCKS

Ƭ **GL_ACTIVE_UNIFORM_BLOCKS**: *35382*

*Defined in [src/js/GPX/webgl/constants.ts:2830](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2830)*

**`constant`** {number}

___

###  GL_ALIASED_LINE_WIDTH_RANGE

Ƭ **GL_ALIASED_LINE_WIDTH_RANGE**: *33902*

*Defined in [src/js/GPX/webgl/constants.ts:275](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L275)*

Passed to getParameter to get the range of available widths for a line. Returns a length-2 array with the lo value at 0, and hight at 1

**`constant`** {number}

___

###  GL_ALIASED_POINT_SIZE_RANGE

Ƭ **GL_ALIASED_POINT_SIZE_RANGE**: *33901*

*Defined in [src/js/GPX/webgl/constants.ts:269](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L269)*

Passed to getParameter to get the current size of a point drawn with gl.POINTS

**`constant`** {number}

___

###  GL_ALPHA

Ƭ **GL_ALPHA**: *6406*

*Defined in [src/js/GPX/webgl/constants.ts:836](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L836)*

**`constant`** {number}

___

###  GL_ALPHA_BITS

Ƭ **GL_ALPHA_BITS**: *3413*

*Defined in [src/js/GPX/webgl/constants.ts:459](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L459)*

**`constant`** {number}

___

###  GL_ALREADY_SIGNALED

Ƭ **GL_ALREADY_SIGNALED**: *37146*

*Defined in [src/js/GPX/webgl/constants.ts:2942](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2942)*

**`constant`** {number}

___

###  GL_ALWAYS

Ƭ **GL_ALWAYS**: *519*

*Defined in [src/js/GPX/webgl/constants.ts:997](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L997)*

Passed to depthFunction or stencilFunction to specify depth or stencil tests will always pass. i.e. Pixels will be drawn in the order they are drawn

**`constant`** {number}

___

###  GL_ANY_SAMPLES_PASSED

Ƭ **GL_ANY_SAMPLES_PASSED**: *35887*

*Defined in [src/js/GPX/webgl/constants.ts:2234](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2234)*

**`constant`** {number}

___

###  GL_ANY_SAMPLES_PASSED_CONSERVATIVE

Ƭ **GL_ANY_SAMPLES_PASSED_CONSERVATIVE**: *36202*

*Defined in [src/js/GPX/webgl/constants.ts:2239](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2239)*

**`constant`** {number}

___

###  GL_ARRAY_BUFFER

Ƭ **GL_ARRAY_BUFFER**: *34962*

*Defined in [src/js/GPX/webgl/constants.ts:566](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L566)*

Passed to bindBuffer or bufferData to specify the type of buffer being used

**`constant`** {number}

___

###  GL_ARRAY_BUFFER_BINDING

Ƭ **GL_ARRAY_BUFFER_BINDING**: *34964*

*Defined in [src/js/GPX/webgl/constants.ts:251](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L251)*

Passed to getParameter to get the array buffer binding

**`constant`** {number}

___

###  GL_ATTACHED_SHADERS

Ƭ **GL_ATTACHED_SHADERS**: *35717*

*Defined in [src/js/GPX/webgl/constants.ts:918](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L918)*

Passed to getProgramParameter after calling attachShader to determine if the shader was attached correctly. Returns false if errors occurred

**`constant`** {number}

___

###  GL_BACK

Ƭ **GL_BACK**: *1029*

*Defined in [src/js/GPX/webgl/constants.ts:649](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L649)*

Passed to cullFace to specify that only back faces should be culled

**`constant`** {number}

___

###  GL_BLEND

Ƭ **GL_BLEND**: *3042*

*Defined in [src/js/GPX/webgl/constants.ts:664](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L664)*

Passed to enable/disable to turn on/off blending. Can also be used with getParameter to find the current blending method

**`constant`** {number}

___

###  GL_BLEND_COLOR

Ƭ **GL_BLEND_COLOR**: *32773*

*Defined in [src/js/GPX/webgl/constants.ts:245](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L245)*

Passed to getParameter to return a the current blend color

**`constant`** {number}

___

###  GL_BLEND_DST_ALPHA

Ƭ **GL_BLEND_DST_ALPHA**: *32970*

*Defined in [src/js/GPX/webgl/constants.ts:233](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L233)*

Passed to getParameter to get the current destination alpha blend function

**`constant`** {number}

___

###  GL_BLEND_DST_RGB

Ƭ **GL_BLEND_DST_RGB**: *32968*

*Defined in [src/js/GPX/webgl/constants.ts:221](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L221)*

Passed to getParameter to get the current destination RGB blend function

**`constant`** {number}

___

###  GL_BLEND_EQUATION

Ƭ **GL_BLEND_EQUATION**: *32777*

*Defined in [src/js/GPX/webgl/constants.ts:203](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L203)*

Passed to getParameter to get the current RGB blend function

**`constant`** {number}

___

###  GL_BLEND_EQUATION_ALPHA

Ƭ **GL_BLEND_EQUATION_ALPHA**: *34877*

*Defined in [src/js/GPX/webgl/constants.ts:215](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L215)*

Passed to getParameter to get the current alpha blend function. Same as BLEND_EQUATION

**`constant`** {number}

___

###  GL_BLEND_EQUATION_RGB

Ƭ **GL_BLEND_EQUATION_RGB**: *32777*

*Defined in [src/js/GPX/webgl/constants.ts:209](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L209)*

Passed to getParameter to get the current RGB blend function. Same as BLEND_EQUATION

**`constant`** {number}

___

###  GL_BLEND_SRC_ALPHA

Ƭ **GL_BLEND_SRC_ALPHA**: *32971*

*Defined in [src/js/GPX/webgl/constants.ts:239](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L239)*

Passed to getParameter to get the current source alpha blend function

**`constant`** {number}

___

###  GL_BLEND_SRC_RGB

Ƭ **GL_BLEND_SRC_RGB**: *32969*

*Defined in [src/js/GPX/webgl/constants.ts:227](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L227)*

Passed to getParameter to get the current source RGB blend function

**`constant`** {number}

___

###  GL_BLUE_BITS

Ƭ **GL_BLUE_BITS**: *3412*

*Defined in [src/js/GPX/webgl/constants.ts:454](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L454)*

**`constant`** {number}

___

###  GL_BOOL

Ƭ **GL_BOOL**: *35670*

*Defined in [src/js/GPX/webgl/constants.ts:1429](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1429)*

**`constant`** {number}

___

###  GL_BOOL_VEC2

Ƭ **GL_BOOL_VEC2**: *35671*

*Defined in [src/js/GPX/webgl/constants.ts:1434](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1434)*

**`constant`** {number}

___

###  GL_BOOL_VEC3

Ƭ **GL_BOOL_VEC3**: *35672*

*Defined in [src/js/GPX/webgl/constants.ts:1439](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1439)*

**`constant`** {number}

___

###  GL_BOOL_VEC4

Ƭ **GL_BOOL_VEC4**: *35673*

*Defined in [src/js/GPX/webgl/constants.ts:1444](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1444)*

**`constant`** {number}

___

###  GL_BROWSER_DEFAULT_WEBGL

Ƭ **GL_BROWSER_DEFAULT_WEBGL**: *37444*

*Defined in [src/js/GPX/webgl/constants.ts:539](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L539)*

**`constant`** {number}

___

###  GL_BUFFER_SIZE

Ƭ **GL_BUFFER_SIZE**: *34660*

*Defined in [src/js/GPX/webgl/constants.ts:578](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L578)*

Passed to getBufferParameter to get a buffer's size

**`constant`** {number}

___

###  GL_BUFFER_USAGE

Ƭ **GL_BUFFER_USAGE**: *34661*

*Defined in [src/js/GPX/webgl/constants.ts:584](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L584)*

Passed to getBufferParameter to get the hint for the buffer passed in when it was created

**`constant`** {number}

___

###  GL_BYTE

Ƭ **GL_BYTE**: *5120*

*Defined in [src/js/GPX/webgl/constants.ts:794](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L794)*

**`constant`** {number}

___

###  GL_CCW

Ƭ **GL_CCW**: *2305*

*Defined in [src/js/GPX/webgl/constants.ts:760](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L760)*

Passed to frontFace to specify the front face of a polygon is drawn in the counter clockwise direction

**`constant`** {number}

___

###  GL_CLAMP_TO_EDGE

Ƭ **GL_CLAMP_TO_EDGE**: *33071*

*Defined in [src/js/GPX/webgl/constants.ts:1387](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1387)*

**`constant`** {number}

___

###  GL_COLOR

Ƭ **GL_COLOR**: *6144*

*Defined in [src/js/GPX/webgl/constants.ts:2969](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2969)*

**`constant`** {number}

___

###  GL_COLOR_ATTACHMENT0

Ƭ **GL_COLOR_ATTACHMENT0**: *36064*

*Defined in [src/js/GPX/webgl/constants.ts:1618](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1618)*

**`constant`** {number}

___

###  GL_COLOR_ATTACHMENT0_WEBGL

Ƭ **GL_COLOR_ATTACHMENT0_WEBGL**: *36064*

*Defined in [src/js/GPX/webgl/constants.ts:3523](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L3523)*

Framebuffer color attachment point

**`constant`** {number}

___

###  GL_COLOR_ATTACHMENT1

Ƭ **GL_COLOR_ATTACHMENT1**: *36065*

*Defined in [src/js/GPX/webgl/constants.ts:2336](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2336)*

**`constant`** {number}

___

###  GL_COLOR_ATTACHMENT10

Ƭ **GL_COLOR_ATTACHMENT10**: *36074*

*Defined in [src/js/GPX/webgl/constants.ts:2381](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2381)*

**`constant`** {number}

___

###  GL_COLOR_ATTACHMENT10_WEBGL

Ƭ **GL_COLOR_ATTACHMENT10_WEBGL**: *36074*

*Defined in [src/js/GPX/webgl/constants.ts:3583](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L3583)*

Framebuffer color attachment point

**`constant`** {number}

___

###  GL_COLOR_ATTACHMENT11

Ƭ **GL_COLOR_ATTACHMENT11**: *36075*

*Defined in [src/js/GPX/webgl/constants.ts:2386](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2386)*

**`constant`** {number}

___

###  GL_COLOR_ATTACHMENT11_WEBGL

Ƭ **GL_COLOR_ATTACHMENT11_WEBGL**: *36075*

*Defined in [src/js/GPX/webgl/constants.ts:3589](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L3589)*

Framebuffer color attachment point

**`constant`** {number}

___

###  GL_COLOR_ATTACHMENT12

Ƭ **GL_COLOR_ATTACHMENT12**: *36076*

*Defined in [src/js/GPX/webgl/constants.ts:2391](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2391)*

**`constant`** {number}

___

###  GL_COLOR_ATTACHMENT12_WEBGL

Ƭ **GL_COLOR_ATTACHMENT12_WEBGL**: *36076*

*Defined in [src/js/GPX/webgl/constants.ts:3595](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L3595)*

Framebuffer color attachment point

**`constant`** {number}

___

###  GL_COLOR_ATTACHMENT13

Ƭ **GL_COLOR_ATTACHMENT13**: *36077*

*Defined in [src/js/GPX/webgl/constants.ts:2396](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2396)*

**`constant`** {number}

___

###  GL_COLOR_ATTACHMENT13_WEBGL

Ƭ **GL_COLOR_ATTACHMENT13_WEBGL**: *36077*

*Defined in [src/js/GPX/webgl/constants.ts:3601](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L3601)*

Framebuffer color attachment point

**`constant`** {number}

___

###  GL_COLOR_ATTACHMENT14

Ƭ **GL_COLOR_ATTACHMENT14**: *36078*

*Defined in [src/js/GPX/webgl/constants.ts:2401](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2401)*

**`constant`** {number}

___

###  GL_COLOR_ATTACHMENT14_WEBGL

Ƭ **GL_COLOR_ATTACHMENT14_WEBGL**: *36078*

*Defined in [src/js/GPX/webgl/constants.ts:3607](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L3607)*

Framebuffer color attachment point

**`constant`** {number}

___

###  GL_COLOR_ATTACHMENT15

Ƭ **GL_COLOR_ATTACHMENT15**: *36079*

*Defined in [src/js/GPX/webgl/constants.ts:2406](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2406)*

**`constant`** {number}

___

###  GL_COLOR_ATTACHMENT15_WEBGL

Ƭ **GL_COLOR_ATTACHMENT15_WEBGL**: *36079*

*Defined in [src/js/GPX/webgl/constants.ts:3613](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L3613)*

Framebuffer color attachment point

**`constant`** {number}

___

###  GL_COLOR_ATTACHMENT1_WEBGL

Ƭ **GL_COLOR_ATTACHMENT1_WEBGL**: *36065*

*Defined in [src/js/GPX/webgl/constants.ts:3529](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L3529)*

Framebuffer color attachment point

**`constant`** {number}

___

###  GL_COLOR_ATTACHMENT2

Ƭ **GL_COLOR_ATTACHMENT2**: *36066*

*Defined in [src/js/GPX/webgl/constants.ts:2341](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2341)*

**`constant`** {number}

___

###  GL_COLOR_ATTACHMENT2_WEBGL

Ƭ **GL_COLOR_ATTACHMENT2_WEBGL**: *36066*

*Defined in [src/js/GPX/webgl/constants.ts:3535](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L3535)*

Framebuffer color attachment point

**`constant`** {number}

___

###  GL_COLOR_ATTACHMENT3

Ƭ **GL_COLOR_ATTACHMENT3**: *36067*

*Defined in [src/js/GPX/webgl/constants.ts:2346](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2346)*

**`constant`** {number}

___

###  GL_COLOR_ATTACHMENT3_WEBGL

Ƭ **GL_COLOR_ATTACHMENT3_WEBGL**: *36067*

*Defined in [src/js/GPX/webgl/constants.ts:3541](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L3541)*

Framebuffer color attachment point

**`constant`** {number}

___

###  GL_COLOR_ATTACHMENT4

Ƭ **GL_COLOR_ATTACHMENT4**: *36068*

*Defined in [src/js/GPX/webgl/constants.ts:2351](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2351)*

**`constant`** {number}

___

###  GL_COLOR_ATTACHMENT4_WEBGL

Ƭ **GL_COLOR_ATTACHMENT4_WEBGL**: *36068*

*Defined in [src/js/GPX/webgl/constants.ts:3547](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L3547)*

Framebuffer color attachment point

**`constant`** {number}

___

###  GL_COLOR_ATTACHMENT5

Ƭ **GL_COLOR_ATTACHMENT5**: *36069*

*Defined in [src/js/GPX/webgl/constants.ts:2356](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2356)*

**`constant`** {number}

___

###  GL_COLOR_ATTACHMENT5_WEBGL

Ƭ **GL_COLOR_ATTACHMENT5_WEBGL**: *36069*

*Defined in [src/js/GPX/webgl/constants.ts:3553](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L3553)*

Framebuffer color attachment point

**`constant`** {number}

___

###  GL_COLOR_ATTACHMENT6

Ƭ **GL_COLOR_ATTACHMENT6**: *36070*

*Defined in [src/js/GPX/webgl/constants.ts:2361](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2361)*

**`constant`** {number}

___

###  GL_COLOR_ATTACHMENT6_WEBGL

Ƭ **GL_COLOR_ATTACHMENT6_WEBGL**: *36070*

*Defined in [src/js/GPX/webgl/constants.ts:3559](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L3559)*

Framebuffer color attachment point

**`constant`** {number}

___

###  GL_COLOR_ATTACHMENT7

Ƭ **GL_COLOR_ATTACHMENT7**: *36071*

*Defined in [src/js/GPX/webgl/constants.ts:2366](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2366)*

**`constant`** {number}

___

###  GL_COLOR_ATTACHMENT7_WEBGL

Ƭ **GL_COLOR_ATTACHMENT7_WEBGL**: *36071*

*Defined in [src/js/GPX/webgl/constants.ts:3565](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L3565)*

Framebuffer color attachment point

**`constant`** {number}

___

###  GL_COLOR_ATTACHMENT8

Ƭ **GL_COLOR_ATTACHMENT8**: *36072*

*Defined in [src/js/GPX/webgl/constants.ts:2371](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2371)*

**`constant`** {number}

___

###  GL_COLOR_ATTACHMENT8_WEBGL

Ƭ **GL_COLOR_ATTACHMENT8_WEBGL**: *36072*

*Defined in [src/js/GPX/webgl/constants.ts:3571](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L3571)*

Framebuffer color attachment point

**`constant`** {number}

___

###  GL_COLOR_ATTACHMENT9

Ƭ **GL_COLOR_ATTACHMENT9**: *36073*

*Defined in [src/js/GPX/webgl/constants.ts:2376](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2376)*

**`constant`** {number}

___

###  GL_COLOR_ATTACHMENT9_WEBGL

Ƭ **GL_COLOR_ATTACHMENT9_WEBGL**: *36073*

*Defined in [src/js/GPX/webgl/constants.ts:3577](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L3577)*

Framebuffer color attachment point

**`constant`** {number}

___

###  GL_COLOR_BUFFER_BIT

Ƭ **GL_COLOR_BUFFER_BIT**: *16384*

*Defined in [src/js/GPX/webgl/constants.ts:35](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L35)*

Passed to clear to clear the current color buffer

**`constant`** {number}

___

###  GL_COLOR_CLEAR_VALUE

Ƭ **GL_COLOR_CLEAR_VALUE**: *3106*

*Defined in [src/js/GPX/webgl/constants.ts:409](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L409)*

**`constant`** {number}

___

###  GL_COLOR_WRITEMASK

Ƭ **GL_COLOR_WRITEMASK**: *3107*

*Defined in [src/js/GPX/webgl/constants.ts:414](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L414)*

**`constant`** {number}

___

###  GL_COMPARE_REF_TO_TEXTURE

Ƭ **GL_COMPARE_REF_TO_TEXTURE**: *34894*

*Defined in [src/js/GPX/webgl/constants.ts:1925](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1925)*

**`constant`** {number}

___

###  GL_COMPILE_STATUS

Ƭ **GL_COMPILE_STATUS**: *35713*

*Defined in [src/js/GPX/webgl/constants.ts:894](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L894)*

Passed to getShaderParamter to get the status of the compilation. Returns false if the shader was not compiled. You can then query getShaderInfoLog to find the exact error

**`constant`** {number}

___

###  GL_COMPLETION_STATUS_KHR

Ƭ **GL_COMPLETION_STATUS_KHR**: *37297*

*Defined in [src/js/GPX/webgl/constants.ts:3783](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L3783)*

Query to determine if the compilation process is complete

**`constant`** {number}

___

###  GL_COMPRESSED_R11_EAC

Ƭ **GL_COMPRESSED_R11_EAC**: *37488*

*Defined in [src/js/GPX/webgl/constants.ts:3147](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L3147)*

One-channel (red) unsigned format compression

**`constant`** {number}

___

###  GL_COMPRESSED_RG11_EAC

Ƭ **GL_COMPRESSED_RG11_EAC**: *37490*

*Defined in [src/js/GPX/webgl/constants.ts:3159](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L3159)*

Two-channel (red and green) unsigned format compression

**`constant`** {number}

___

###  GL_COMPRESSED_RGB8_ETC2

Ƭ **GL_COMPRESSED_RGB8_ETC2**: *37492*

*Defined in [src/js/GPX/webgl/constants.ts:3171](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L3171)*

Compresses RBG8 data with no alpha channel

**`constant`** {number}

___

###  GL_COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2

Ƭ **GL_COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2**: *37496*

*Defined in [src/js/GPX/webgl/constants.ts:3195](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L3195)*

Similar to RGB8_ETC, but with ability to punch through the alpha channel, which means to make it completely opaque or transparent

**`constant`** {number}

___

###  GL_COMPRESSED_RGBA8_ETC2_EAC

Ƭ **GL_COMPRESSED_RGBA8_ETC2_EAC**: *37493*

*Defined in [src/js/GPX/webgl/constants.ts:3177](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L3177)*

Compresses RGBA8 data. The RGB part is encoded the same as RGB_ETC2, but the alpha part is encoded separately

**`constant`** {number}

___

###  GL_COMPRESSED_RGBA_ASTC_10X10_KHR

Ƭ **GL_COMPRESSED_RGBA_ASTC_10X10_KHR**: *37819*

*Defined in [src/js/GPX/webgl/constants.ts:3331](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L3331)*

Compresses RGBA textures using ASTC compression in a blocksize of 10x10

**`constant`** {number}

___

###  GL_COMPRESSED_RGBA_ASTC_10X5_KHR

Ƭ **GL_COMPRESSED_RGBA_ASTC_10X5_KHR**: *37816*

*Defined in [src/js/GPX/webgl/constants.ts:3313](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L3313)*

Compresses RGBA textures using ASTC compression in a blocksize of 10x5

**`constant`** {number}

___

###  GL_COMPRESSED_RGBA_ASTC_10X6_KHR

Ƭ **GL_COMPRESSED_RGBA_ASTC_10X6_KHR**: *37817*

*Defined in [src/js/GPX/webgl/constants.ts:3319](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L3319)*

Compresses RGBA textures using ASTC compression in a blocksize of 10x6

**`constant`** {number}

___

###  GL_COMPRESSED_RGBA_ASTC_10X8_KHR

Ƭ **GL_COMPRESSED_RGBA_ASTC_10X8_KHR**: *37818*

*Defined in [src/js/GPX/webgl/constants.ts:3325](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L3325)*

Compresses RGBA textures using ASTC compression in a blocksize of 10x8

**`constant`** {number}

___

###  GL_COMPRESSED_RGBA_ASTC_12X10_KHR

Ƭ **GL_COMPRESSED_RGBA_ASTC_12X10_KHR**: *37820*

*Defined in [src/js/GPX/webgl/constants.ts:3337](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L3337)*

Compresses RGBA textures using ASTC compression in a blocksize of 12x10

**`constant`** {number}

___

###  GL_COMPRESSED_RGBA_ASTC_12X12_KHR

Ƭ **GL_COMPRESSED_RGBA_ASTC_12X12_KHR**: *37821*

*Defined in [src/js/GPX/webgl/constants.ts:3343](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L3343)*

Compresses RGBA textures using ASTC compression in a blocksize of 12x12

**`constant`** {number}

___

###  GL_COMPRESSED_RGBA_ASTC_4X4_KHR

Ƭ **GL_COMPRESSED_RGBA_ASTC_4X4_KHR**: *37808*

*Defined in [src/js/GPX/webgl/constants.ts:3265](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L3265)*

Compresses RGBA textures using ASTC compression in a blocksize of 4x4

**`constant`** {number}

___

###  GL_COMPRESSED_RGBA_ASTC_5X4_KHR

Ƭ **GL_COMPRESSED_RGBA_ASTC_5X4_KHR**: *37809*

*Defined in [src/js/GPX/webgl/constants.ts:3271](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L3271)*

Compresses RGBA textures using ASTC compression in a blocksize of 5x4

**`constant`** {number}

___

###  GL_COMPRESSED_RGBA_ASTC_5X5_KHR

Ƭ **GL_COMPRESSED_RGBA_ASTC_5X5_KHR**: *37810*

*Defined in [src/js/GPX/webgl/constants.ts:3277](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L3277)*

Compresses RGBA textures using ASTC compression in a blocksize of 5x5

**`constant`** {number}

___

###  GL_COMPRESSED_RGBA_ASTC_6X5_KHR

Ƭ **GL_COMPRESSED_RGBA_ASTC_6X5_KHR**: *37811*

*Defined in [src/js/GPX/webgl/constants.ts:3283](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L3283)*

Compresses RGBA textures using ASTC compression in a blocksize of 6x5

**`constant`** {number}

___

###  GL_COMPRESSED_RGBA_ASTC_6X6_KHR

Ƭ **GL_COMPRESSED_RGBA_ASTC_6X6_KHR**: *37812*

*Defined in [src/js/GPX/webgl/constants.ts:3289](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L3289)*

Compresses RGBA textures using ASTC compression in a blocksize of 6x6

**`constant`** {number}

___

###  GL_COMPRESSED_RGBA_ASTC_8X5_KHR

Ƭ **GL_COMPRESSED_RGBA_ASTC_8X5_KHR**: *37813*

*Defined in [src/js/GPX/webgl/constants.ts:3295](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L3295)*

Compresses RGBA textures using ASTC compression in a blocksize of 8x5

**`constant`** {number}

___

###  GL_COMPRESSED_RGBA_ASTC_8X6_KHR

Ƭ **GL_COMPRESSED_RGBA_ASTC_8X6_KHR**: *37814*

*Defined in [src/js/GPX/webgl/constants.ts:3301](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L3301)*

Compresses RGBA textures using ASTC compression in a blocksize of 8x6

**`constant`** {number}

___

###  GL_COMPRESSED_RGBA_ASTC_8X8_KHR

Ƭ **GL_COMPRESSED_RGBA_ASTC_8X8_KHR**: *37815*

*Defined in [src/js/GPX/webgl/constants.ts:3307](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L3307)*

Compresses RGBA textures using ASTC compression in a blocksize of 8x8

**`constant`** {number}

___

###  GL_COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL

Ƭ **GL_COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL**: *35986*

*Defined in [src/js/GPX/webgl/constants.ts:3249](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L3249)*

Compresses RGBA textures using explicit alpha encoding (useful when alpha transitions are sharp)

**`constant`** {number}

___

###  GL_COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL

Ƭ **GL_COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL**: *34798*

*Defined in [src/js/GPX/webgl/constants.ts:3255](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L3255)*

Compresses RGBA textures using interpolated alpha encoding (useful when alpha transitions are gradient)

**`constant`** {number}

___

###  GL_COMPRESSED_RGBA_PVRTC_2BPPV1_IMG

Ƭ **GL_COMPRESSED_RGBA_PVRTC_2BPPV1_IMG**: *35843*

*Defined in [src/js/GPX/webgl/constants.ts:3227](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L3227)*

RGBA compression in 2-bit mode. One block for each 8×4 pixels

**`constant`** {number}

___

###  GL_COMPRESSED_RGBA_PVRTC_4BPPV1_IMG

Ƭ **GL_COMPRESSED_RGBA_PVRTC_4BPPV1_IMG**: *35842*

*Defined in [src/js/GPX/webgl/constants.ts:3215](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L3215)*

RGBA compression in 4-bit mode. One block for each 4×4 pixels

**`constant`** {number}

___

###  GL_COMPRESSED_RGBA_S3TC_DXT1_EXT

Ƭ **GL_COMPRESSED_RGBA_S3TC_DXT1_EXT**: *33777*

*Defined in [src/js/GPX/webgl/constants.ts:3101](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L3101)*

A DXT1-compressed image in an RGB image format with a simple on/off alpha value

**`constant`** {number}

___

###  GL_COMPRESSED_RGBA_S3TC_DXT3_EXT

Ƭ **GL_COMPRESSED_RGBA_S3TC_DXT3_EXT**: *33778*

*Defined in [src/js/GPX/webgl/constants.ts:3107](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L3107)*

A DXT3-compressed image in an RGBA image format. Compared to a 32-bit RGBA texture, it offers 4:1 compression

**`constant`** {number}

___

###  GL_COMPRESSED_RGBA_S3TC_DXT5_EXT

Ƭ **GL_COMPRESSED_RGBA_S3TC_DXT5_EXT**: *33779*

*Defined in [src/js/GPX/webgl/constants.ts:3113](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L3113)*

A DXT5-compressed image in an RGBA image format. It also provides a 4:1 compression, but differs to the DXT3 compression in how the alpha compression is done

**`constant`** {number}

___

###  GL_COMPRESSED_RGB_ATC_WEBGL

Ƭ **GL_COMPRESSED_RGB_ATC_WEBGL**: *35986*

*Defined in [src/js/GPX/webgl/constants.ts:3243](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L3243)*

Compresses RGB textures with no alpha channel

**`constant`** {number}

___

###  GL_COMPRESSED_RGB_ETC1_WEBGL

Ƭ **GL_COMPRESSED_RGB_ETC1_WEBGL**: *36196*

*Defined in [src/js/GPX/webgl/constants.ts:3235](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L3235)*

Compresses 24-bit RGB data with no alpha channel

**`constant`** {number}

___

###  GL_COMPRESSED_RGB_PVRTC_2BPPV1_IMG

Ƭ **GL_COMPRESSED_RGB_PVRTC_2BPPV1_IMG**: *35841*

*Defined in [src/js/GPX/webgl/constants.ts:3221](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L3221)*

RGB compression in 2-bit mode. One block for each 8×4 pixels

**`constant`** {number}

___

###  GL_COMPRESSED_RGB_PVRTC_4BPPV1_IMG

Ƭ **GL_COMPRESSED_RGB_PVRTC_4BPPV1_IMG**: *35840*

*Defined in [src/js/GPX/webgl/constants.ts:3209](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L3209)*

RGB compression in 4-bit mode. One block for each 4×4 pixels

**`constant`** {number}

___

###  GL_COMPRESSED_RGB_S3TC_DXT1_EXT

Ƭ **GL_COMPRESSED_RGB_S3TC_DXT1_EXT**: *33776*

*Defined in [src/js/GPX/webgl/constants.ts:3095](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L3095)*

A DXT1-compressed image in an RGB image format

**`constant`** {number}

___

###  GL_COMPRESSED_SIGNED_R11_EAC

Ƭ **GL_COMPRESSED_SIGNED_R11_EAC**: *37489*

*Defined in [src/js/GPX/webgl/constants.ts:3153](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L3153)*

One-channel (red) signed format compression

**`constant`** {number}

___

###  GL_COMPRESSED_SIGNED_RG11_EAC

Ƭ **GL_COMPRESSED_SIGNED_RG11_EAC**: *37491*

*Defined in [src/js/GPX/webgl/constants.ts:3165](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L3165)*

Two-channel (red and green) signed format compression

**`constant`** {number}

___

###  GL_COMPRESSED_SRGB8_ALPHA8_ASTC_10X10_KHR

Ƭ **GL_COMPRESSED_SRGB8_ALPHA8_ASTC_10X10_KHR**: *37851*

*Defined in [src/js/GPX/webgl/constants.ts:3415](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L3415)*

Compresses SRGB8 textures using ASTC compression in a blocksize of 10x10

**`constant`** {number}

___

###  GL_COMPRESSED_SRGB8_ALPHA8_ASTC_10X5_KHR

Ƭ **GL_COMPRESSED_SRGB8_ALPHA8_ASTC_10X5_KHR**: *37848*

*Defined in [src/js/GPX/webgl/constants.ts:3397](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L3397)*

Compresses SRGB8 textures using ASTC compression in a blocksize of 10x5

**`constant`** {number}

___

###  GL_COMPRESSED_SRGB8_ALPHA8_ASTC_10X6_KHR

Ƭ **GL_COMPRESSED_SRGB8_ALPHA8_ASTC_10X6_KHR**: *37849*

*Defined in [src/js/GPX/webgl/constants.ts:3403](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L3403)*

Compresses SRGB8 textures using ASTC compression in a blocksize of 10x6

**`constant`** {number}

___

###  GL_COMPRESSED_SRGB8_ALPHA8_ASTC_10X8_KHR

Ƭ **GL_COMPRESSED_SRGB8_ALPHA8_ASTC_10X8_KHR**: *37850*

*Defined in [src/js/GPX/webgl/constants.ts:3409](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L3409)*

Compresses SRGB8 textures using ASTC compression in a blocksize of 10x8

**`constant`** {number}

___

###  GL_COMPRESSED_SRGB8_ALPHA8_ASTC_12X10_KHR

Ƭ **GL_COMPRESSED_SRGB8_ALPHA8_ASTC_12X10_KHR**: *37852*

*Defined in [src/js/GPX/webgl/constants.ts:3421](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L3421)*

Compresses SRGB8 textures using ASTC compression in a blocksize of 12x10

**`constant`** {number}

___

###  GL_COMPRESSED_SRGB8_ALPHA8_ASTC_12X12_KHR

Ƭ **GL_COMPRESSED_SRGB8_ALPHA8_ASTC_12X12_KHR**: *37853*

*Defined in [src/js/GPX/webgl/constants.ts:3427](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L3427)*

Compresses SRGB8 textures using ASTC compression in a blocksize of 12x12

**`constant`** {number}

___

###  GL_COMPRESSED_SRGB8_ALPHA8_ASTC_4X4_KHR

Ƭ **GL_COMPRESSED_SRGB8_ALPHA8_ASTC_4X4_KHR**: *37840*

*Defined in [src/js/GPX/webgl/constants.ts:3349](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L3349)*

Compresses SRGB8 textures using ASTC compression in a blocksize of 4x4

**`constant`** {number}

___

###  GL_COMPRESSED_SRGB8_ALPHA8_ASTC_5X4_KHR

Ƭ **GL_COMPRESSED_SRGB8_ALPHA8_ASTC_5X4_KHR**: *37841*

*Defined in [src/js/GPX/webgl/constants.ts:3355](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L3355)*

Compresses SRGB8 textures using ASTC compression in a blocksize of 5x4

**`constant`** {number}

___

###  GL_COMPRESSED_SRGB8_ALPHA8_ASTC_5X5_KHR

Ƭ **GL_COMPRESSED_SRGB8_ALPHA8_ASTC_5X5_KHR**: *37842*

*Defined in [src/js/GPX/webgl/constants.ts:3361](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L3361)*

Compresses SRGB8 textures using ASTC compression in a blocksize of 5x5

**`constant`** {number}

___

###  GL_COMPRESSED_SRGB8_ALPHA8_ASTC_6X5_KHR

Ƭ **GL_COMPRESSED_SRGB8_ALPHA8_ASTC_6X5_KHR**: *37843*

*Defined in [src/js/GPX/webgl/constants.ts:3367](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L3367)*

Compresses SRGB8 textures using ASTC compression in a blocksize of 6x5

**`constant`** {number}

___

###  GL_COMPRESSED_SRGB8_ALPHA8_ASTC_6X6_KHR

Ƭ **GL_COMPRESSED_SRGB8_ALPHA8_ASTC_6X6_KHR**: *37844*

*Defined in [src/js/GPX/webgl/constants.ts:3373](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L3373)*

Compresses SRGB8 textures using ASTC compression in a blocksize of 6x6

**`constant`** {number}

___

###  GL_COMPRESSED_SRGB8_ALPHA8_ASTC_8X5_KHR

Ƭ **GL_COMPRESSED_SRGB8_ALPHA8_ASTC_8X5_KHR**: *37845*

*Defined in [src/js/GPX/webgl/constants.ts:3379](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L3379)*

Compresses SRGB8 textures using ASTC compression in a blocksize of 8x5

**`constant`** {number}

___

###  GL_COMPRESSED_SRGB8_ALPHA8_ASTC_8X6_KHR

Ƭ **GL_COMPRESSED_SRGB8_ALPHA8_ASTC_8X6_KHR**: *37846*

*Defined in [src/js/GPX/webgl/constants.ts:3385](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L3385)*

Compresses SRGB8 textures using ASTC compression in a blocksize of 8x6

**`constant`** {number}

___

###  GL_COMPRESSED_SRGB8_ALPHA8_ASTC_8X8_KHR

Ƭ **GL_COMPRESSED_SRGB8_ALPHA8_ASTC_8X8_KHR**: *37847*

*Defined in [src/js/GPX/webgl/constants.ts:3391](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L3391)*

Compresses SRGB8 textures using ASTC compression in a blocksize of 8x8

**`constant`** {number}

___

###  GL_COMPRESSED_SRGB8_ALPHA8_ETC2_EAC

Ƭ **GL_COMPRESSED_SRGB8_ALPHA8_ETC2_EAC**: *37495*

*Defined in [src/js/GPX/webgl/constants.ts:3189](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L3189)*

Compresses sRGBA8 data. The sRGB part is encoded the same as SRGB_ETC2, but the alpha part is encoded separately

**`constant`** {number}

___

###  GL_COMPRESSED_SRGB8_ETC2

Ƭ **GL_COMPRESSED_SRGB8_ETC2**: *37494*

*Defined in [src/js/GPX/webgl/constants.ts:3183](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L3183)*

Compresses sRBG8 data with no alpha channel

**`constant`** {number}

___

###  GL_COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2

Ƭ **GL_COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2**: *37497*

*Defined in [src/js/GPX/webgl/constants.ts:3201](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L3201)*

Similar to SRGB8_ETC, but with ability to punch through the alpha channel, which means to make it completely opaque or transparent

**`constant`** {number}

___

###  GL_COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT

Ƭ **GL_COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT**: *35917*

*Defined in [src/js/GPX/webgl/constants.ts:3127](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L3127)*

A DXT1-compressed image in an sRGB image format with a simple on/off alpha value

**`constant`** {number}

___

###  GL_COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT

Ƭ **GL_COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT**: *35918*

*Defined in [src/js/GPX/webgl/constants.ts:3133](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L3133)*

A DXT3-compressed image in an sRGBA image format

**`constant`** {number}

___

###  GL_COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT

Ƭ **GL_COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT**: *35919*

*Defined in [src/js/GPX/webgl/constants.ts:3139](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L3139)*

A DXT5-compressed image in an sRGBA image format

**`constant`** {number}

___

###  GL_COMPRESSED_SRGB_S3TC_DXT1_EXT

Ƭ **GL_COMPRESSED_SRGB_S3TC_DXT1_EXT**: *35916*

*Defined in [src/js/GPX/webgl/constants.ts:3121](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L3121)*

A DXT1-compressed image in an sRGB image format

**`constant`** {number}

___

###  GL_COMPRESSED_TEXTURE_FORMATS

Ƭ **GL_COMPRESSED_TEXTURE_FORMATS**: *34467*

*Defined in [src/js/GPX/webgl/constants.ts:509](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L509)*

**`constant`** {number}

___

###  GL_CONDITION_SATISFIED

Ƭ **GL_CONDITION_SATISFIED**: *37148*

*Defined in [src/js/GPX/webgl/constants.ts:2952](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2952)*

**`constant`** {number}

___

###  GL_CONSTANT_ALPHA

Ƭ **GL_CONSTANT_ALPHA**: *32771*

*Defined in [src/js/GPX/webgl/constants.ts:167](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L167)*

Passed to blendFunc or blendFuncSeparate to specify a constant alpha blend function

**`constant`** {number}

___

###  GL_CONSTANT_COLOR

Ƭ **GL_CONSTANT_COLOR**: *32769*

*Defined in [src/js/GPX/webgl/constants.ts:155](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L155)*

Passed to blendFunc or blendFuncSeparate to specify a constant color blend function

**`constant`** {number}

___

###  GL_CONTEXT_LOST_WEBGL

Ƭ **GL_CONTEXT_LOST_WEBGL**: *37442*

*Defined in [src/js/GPX/webgl/constants.ts:745](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L745)*

Returned from getError

**`constant`** {number}

___

###  GL_COPY_READ_BUFFER

Ƭ **GL_COPY_READ_BUFFER**: *36662*

*Defined in [src/js/GPX/webgl/constants.ts:2510](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2510)*

**`constant`** {number}

___

###  GL_COPY_READ_BUFFER_BINDING

Ƭ **GL_COPY_READ_BUFFER_BINDING**: *36662*

*Defined in [src/js/GPX/webgl/constants.ts:2520](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2520)*

**`constant`** {number}

___

###  GL_COPY_WRITE_BUFFER

Ƭ **GL_COPY_WRITE_BUFFER**: *36663*

*Defined in [src/js/GPX/webgl/constants.ts:2515](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2515)*

**`constant`** {number}

___

###  GL_COPY_WRITE_BUFFER_BINDING

Ƭ **GL_COPY_WRITE_BUFFER_BINDING**: *36663*

*Defined in [src/js/GPX/webgl/constants.ts:2525](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2525)*

**`constant`** {number}

___

###  GL_CULL_FACE

Ƭ **GL_CULL_FACE**: *2884*

*Defined in [src/js/GPX/webgl/constants.ts:637](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L637)*

Passed to enable/disable to turn on/off culling. Can also be used with getParameter to find the current culling method

**`constant`** {number}

___

###  GL_CULL_FACE_MODE

Ƭ **GL_CULL_FACE_MODE**: *2885*

*Defined in [src/js/GPX/webgl/constants.ts:281](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L281)*

Passed to getParameter to get the current value of cullFace. Should return FRONT, BACK, or FRONT_AND_BACK

**`constant`** {number}

___

###  GL_CURRENT_PROGRAM

Ƭ **GL_CURRENT_PROGRAM**: *35725*

*Defined in [src/js/GPX/webgl/constants.ts:982](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L982)*

**`constant`** {number}

___

###  GL_CURRENT_QUERY

Ƭ **GL_CURRENT_QUERY**: *34917*

*Defined in [src/js/GPX/webgl/constants.ts:2219](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2219)*

**`constant`** {number}

___

###  GL_CURRENT_QUERY_EXT

Ƭ **GL_CURRENT_QUERY_EXT**: *34917*

*Defined in [src/js/GPX/webgl/constants.ts:3743](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L3743)*

The currently active query

**`constant`** {number}

___

###  GL_CURRENT_VERTEX_ATTRIB

Ƭ **GL_CURRENT_VERTEX_ATTRIB**: *34342*

*Defined in [src/js/GPX/webgl/constants.ts:593](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L593)*

Passed to getVertexAttrib to read back the current vertex attribute

**`constant`** {number}

___

###  GL_CW

Ƭ **GL_CW**: *2304*

*Defined in [src/js/GPX/webgl/constants.ts:754](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L754)*

Passed to frontFace to specify the front face of a polygon is drawn in the clockwise direction,

**`constant`** {number}

___

###  GL_DECR

Ƭ **GL_DECR**: *7683*

*Defined in [src/js/GPX/webgl/constants.ts:1056](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1056)*

**`constant`** {number}

___

###  GL_DECR_WRAP

Ƭ **GL_DECR_WRAP**: *34056*

*Defined in [src/js/GPX/webgl/constants.ts:1071](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1071)*

**`constant`** {number}

___

###  GL_DELETE_STATUS

Ƭ **GL_DELETE_STATUS**: *35712*

*Defined in [src/js/GPX/webgl/constants.ts:900](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L900)*

Passed to getShaderParamter to determine if a shader was deleted via deleteShader. Returns true if it was, false otherwise

**`constant`** {number}

___

###  GL_DEPTH

Ƭ **GL_DEPTH**: *6145*

*Defined in [src/js/GPX/webgl/constants.ts:2974](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2974)*

**`constant`** {number}

___

###  GL_DEPTH24_STENCIL8

Ƭ **GL_DEPTH24_STENCIL8**: *35056*

*Defined in [src/js/GPX/webgl/constants.ts:2728](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2728)*

**`constant`** {number}

___

###  GL_DEPTH32F_STENCIL8

Ƭ **GL_DEPTH32F_STENCIL8**: *36013*

*Defined in [src/js/GPX/webgl/constants.ts:3034](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L3034)*

**`constant`** {number}

___

###  GL_DEPTH_ATTACHMENT

Ƭ **GL_DEPTH_ATTACHMENT**: *36096*

*Defined in [src/js/GPX/webgl/constants.ts:1623](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1623)*

**`constant`** {number}

___

###  GL_DEPTH_BITS

Ƭ **GL_DEPTH_BITS**: *3414*

*Defined in [src/js/GPX/webgl/constants.ts:464](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L464)*

**`constant`** {number}

___

###  GL_DEPTH_BUFFER_BIT

Ƭ **GL_DEPTH_BUFFER_BIT**: *256*

*Defined in [src/js/GPX/webgl/constants.ts:23](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L23)*

Passed to clear to clear the current depth buffer

**`constant`** {number}

___

###  GL_DEPTH_CLEAR_VALUE

Ƭ **GL_DEPTH_CLEAR_VALUE**: *2931*

*Defined in [src/js/GPX/webgl/constants.ts:305](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L305)*

Passed to getParameter to determine the current depth clear value

**`constant`** {number}

___

###  GL_DEPTH_COMPONENT

Ƭ **GL_DEPTH_COMPONENT**: *6402*

*Defined in [src/js/GPX/webgl/constants.ts:831](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L831)*

**`constant`** {number}

___

###  GL_DEPTH_COMPONENT16

Ƭ **GL_DEPTH_COMPONENT16**: *33189*

*Defined in [src/js/GPX/webgl/constants.ts:1533](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1533)*

**`constant`** {number}

___

###  GL_DEPTH_COMPONENT24

Ƭ **GL_DEPTH_COMPONENT24**: *33190*

*Defined in [src/js/GPX/webgl/constants.ts:2994](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2994)*

**`constant`** {number}

___

###  GL_DEPTH_COMPONENT32F

Ƭ **GL_DEPTH_COMPONENT32F**: *36012*

*Defined in [src/js/GPX/webgl/constants.ts:3029](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L3029)*

**`constant`** {number}

___

###  GL_DEPTH_FUNC

Ƭ **GL_DEPTH_FUNC**: *2932*

*Defined in [src/js/GPX/webgl/constants.ts:311](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L311)*

Passed to getParameter to get the current depth function. Returns NEVER, ALWAYS, LESS, EQUAL, LEQUAL, GREATER, GEQUAL, or NOTEQUAL

**`constant`** {number}

___

###  GL_DEPTH_RANGE

Ƭ **GL_DEPTH_RANGE**: *2928*

*Defined in [src/js/GPX/webgl/constants.ts:293](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L293)*

Passed to getParameter to return a length-2 array of floats giving the current depth range

**`constant`** {number}

___

###  GL_DEPTH_STENCIL

Ƭ **GL_DEPTH_STENCIL**: *34041*

*Defined in [src/js/GPX/webgl/constants.ts:1548](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1548)*

**`constant`** {number}

___

###  GL_DEPTH_STENCIL_ATTACHMENT

Ƭ **GL_DEPTH_STENCIL_ATTACHMENT**: *33306*

*Defined in [src/js/GPX/webgl/constants.ts:1633](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1633)*

**`constant`** {number}

___

###  GL_DEPTH_TEST

Ƭ **GL_DEPTH_TEST**: *2929*

*Defined in [src/js/GPX/webgl/constants.ts:670](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L670)*

Passed to enable/disable to turn on/off the depth test. Can also be used with getParameter to query the depth test

**`constant`** {number}

___

###  GL_DEPTH_WRITEMASK

Ƭ **GL_DEPTH_WRITEMASK**: *2930*

*Defined in [src/js/GPX/webgl/constants.ts:299](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L299)*

Passed to getParameter to determine if the depth write mask is enabled

**`constant`** {number}

___

###  GL_DITHER

Ƭ **GL_DITHER**: *3024*

*Defined in [src/js/GPX/webgl/constants.ts:676](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L676)*

Passed to enable/disable to turn on/off dithering. Can also be used with getParameter to find the current dithering method

**`constant`** {number}

___

###  GL_DONT_CARE

Ƭ **GL_DONT_CARE**: *4352*

*Defined in [src/js/GPX/webgl/constants.ts:769](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L769)*

There is no preference for this behavior

**`constant`** {number}

___

###  GL_DRAW_BUFFER0

Ƭ **GL_DRAW_BUFFER0**: *34853*

*Defined in [src/js/GPX/webgl/constants.ts:2251](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2251)*

**`constant`** {number}

___

###  GL_DRAW_BUFFER0_WEBGL

Ƭ **GL_DRAW_BUFFER0_WEBGL**: *34853*

*Defined in [src/js/GPX/webgl/constants.ts:3619](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L3619)*

Draw buffer

**`constant`** {number}

___

###  GL_DRAW_BUFFER1

Ƭ **GL_DRAW_BUFFER1**: *34854*

*Defined in [src/js/GPX/webgl/constants.ts:2256](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2256)*

**`constant`** {number}

___

###  GL_DRAW_BUFFER10

Ƭ **GL_DRAW_BUFFER10**: *34863*

*Defined in [src/js/GPX/webgl/constants.ts:2301](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2301)*

**`constant`** {number}

___

###  GL_DRAW_BUFFER10_WEBGL

Ƭ **GL_DRAW_BUFFER10_WEBGL**: *34863*

*Defined in [src/js/GPX/webgl/constants.ts:3679](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L3679)*

Draw buffer

**`constant`** {number}

___

###  GL_DRAW_BUFFER11

Ƭ **GL_DRAW_BUFFER11**: *34864*

*Defined in [src/js/GPX/webgl/constants.ts:2306](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2306)*

**`constant`** {number}

___

###  GL_DRAW_BUFFER11_WEBGL

Ƭ **GL_DRAW_BUFFER11_WEBGL**: *34864*

*Defined in [src/js/GPX/webgl/constants.ts:3685](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L3685)*

Draw buffer

**`constant`** {number}

___

###  GL_DRAW_BUFFER12

Ƭ **GL_DRAW_BUFFER12**: *34865*

*Defined in [src/js/GPX/webgl/constants.ts:2311](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2311)*

**`constant`** {number}

___

###  GL_DRAW_BUFFER12_WEBGL

Ƭ **GL_DRAW_BUFFER12_WEBGL**: *34865*

*Defined in [src/js/GPX/webgl/constants.ts:3691](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L3691)*

Draw buffer

**`constant`** {number}

___

###  GL_DRAW_BUFFER13

Ƭ **GL_DRAW_BUFFER13**: *34866*

*Defined in [src/js/GPX/webgl/constants.ts:2316](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2316)*

**`constant`** {number}

___

###  GL_DRAW_BUFFER13_WEBGL

Ƭ **GL_DRAW_BUFFER13_WEBGL**: *34866*

*Defined in [src/js/GPX/webgl/constants.ts:3697](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L3697)*

Draw buffer

**`constant`** {number}

___

###  GL_DRAW_BUFFER14

Ƭ **GL_DRAW_BUFFER14**: *34867*

*Defined in [src/js/GPX/webgl/constants.ts:2321](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2321)*

**`constant`** {number}

___

###  GL_DRAW_BUFFER14_WEBGL

Ƭ **GL_DRAW_BUFFER14_WEBGL**: *34867*

*Defined in [src/js/GPX/webgl/constants.ts:3703](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L3703)*

Draw buffer

**`constant`** {number}

___

###  GL_DRAW_BUFFER15

Ƭ **GL_DRAW_BUFFER15**: *34868*

*Defined in [src/js/GPX/webgl/constants.ts:2326](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2326)*

**`constant`** {number}

___

###  GL_DRAW_BUFFER15_WEBGL

Ƭ **GL_DRAW_BUFFER15_WEBGL**: *34868*

*Defined in [src/js/GPX/webgl/constants.ts:3709](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L3709)*

Draw buffer

**`constant`** {number}

___

###  GL_DRAW_BUFFER1_WEBGL

Ƭ **GL_DRAW_BUFFER1_WEBGL**: *34854*

*Defined in [src/js/GPX/webgl/constants.ts:3625](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L3625)*

Draw buffer

**`constant`** {number}

___

###  GL_DRAW_BUFFER2

Ƭ **GL_DRAW_BUFFER2**: *34855*

*Defined in [src/js/GPX/webgl/constants.ts:2261](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2261)*

**`constant`** {number}

___

###  GL_DRAW_BUFFER2_WEBGL

Ƭ **GL_DRAW_BUFFER2_WEBGL**: *34855*

*Defined in [src/js/GPX/webgl/constants.ts:3631](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L3631)*

Draw buffer

**`constant`** {number}

___

###  GL_DRAW_BUFFER3

Ƭ **GL_DRAW_BUFFER3**: *34856*

*Defined in [src/js/GPX/webgl/constants.ts:2266](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2266)*

**`constant`** {number}

___

###  GL_DRAW_BUFFER3_WEBGL

Ƭ **GL_DRAW_BUFFER3_WEBGL**: *34856*

*Defined in [src/js/GPX/webgl/constants.ts:3637](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L3637)*

Draw buffer

**`constant`** {number}

___

###  GL_DRAW_BUFFER4

Ƭ **GL_DRAW_BUFFER4**: *34857*

*Defined in [src/js/GPX/webgl/constants.ts:2271](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2271)*

**`constant`** {number}

___

###  GL_DRAW_BUFFER4_WEBGL

Ƭ **GL_DRAW_BUFFER4_WEBGL**: *34857*

*Defined in [src/js/GPX/webgl/constants.ts:3643](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L3643)*

Draw buffer

**`constant`** {number}

___

###  GL_DRAW_BUFFER5

Ƭ **GL_DRAW_BUFFER5**: *34858*

*Defined in [src/js/GPX/webgl/constants.ts:2276](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2276)*

**`constant`** {number}

___

###  GL_DRAW_BUFFER5_WEBGL

Ƭ **GL_DRAW_BUFFER5_WEBGL**: *34858*

*Defined in [src/js/GPX/webgl/constants.ts:3649](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L3649)*

Draw buffer

**`constant`** {number}

___

###  GL_DRAW_BUFFER6

Ƭ **GL_DRAW_BUFFER6**: *34859*

*Defined in [src/js/GPX/webgl/constants.ts:2281](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2281)*

**`constant`** {number}

___

###  GL_DRAW_BUFFER6_WEBGL

Ƭ **GL_DRAW_BUFFER6_WEBGL**: *34859*

*Defined in [src/js/GPX/webgl/constants.ts:3655](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L3655)*

Draw buffer

**`constant`** {number}

___

###  GL_DRAW_BUFFER7

Ƭ **GL_DRAW_BUFFER7**: *34860*

*Defined in [src/js/GPX/webgl/constants.ts:2286](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2286)*

**`constant`** {number}

___

###  GL_DRAW_BUFFER7_WEBGL

Ƭ **GL_DRAW_BUFFER7_WEBGL**: *34860*

*Defined in [src/js/GPX/webgl/constants.ts:3661](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L3661)*

Draw buffer

**`constant`** {number}

___

###  GL_DRAW_BUFFER8

Ƭ **GL_DRAW_BUFFER8**: *34861*

*Defined in [src/js/GPX/webgl/constants.ts:2291](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2291)*

**`constant`** {number}

___

###  GL_DRAW_BUFFER8_WEBGL

Ƭ **GL_DRAW_BUFFER8_WEBGL**: *34861*

*Defined in [src/js/GPX/webgl/constants.ts:3667](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L3667)*

Draw buffer

**`constant`** {number}

___

###  GL_DRAW_BUFFER9

Ƭ **GL_DRAW_BUFFER9**: *34862*

*Defined in [src/js/GPX/webgl/constants.ts:2296](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2296)*

**`constant`** {number}

___

###  GL_DRAW_BUFFER9_WEBGL

Ƭ **GL_DRAW_BUFFER9_WEBGL**: *34862*

*Defined in [src/js/GPX/webgl/constants.ts:3673](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L3673)*

Draw buffer

**`constant`** {number}

___

###  GL_DRAW_FRAMEBUFFER

Ƭ **GL_DRAW_FRAMEBUFFER**: *36009*

*Defined in [src/js/GPX/webgl/constants.ts:2743](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2743)*

**`constant`** {number}

___

###  GL_DRAW_FRAMEBUFFER_BINDING

Ƭ **GL_DRAW_FRAMEBUFFER_BINDING**: *36006*

*Defined in [src/js/GPX/webgl/constants.ts:2733](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2733)*

**`constant`** {number}

___

###  GL_DST_ALPHA

Ƭ **GL_DST_ALPHA**: *772*

*Defined in [src/js/GPX/webgl/constants.ts:125](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L125)*

Passed to blendFunc or blendFuncSeparate to multiply a component by the destination's alpha

**`constant`** {number}

___

###  GL_DST_COLOR

Ƭ **GL_DST_COLOR**: *774*

*Defined in [src/js/GPX/webgl/constants.ts:137](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L137)*

Passed to blendFunc or blendFuncSeparate to multiply a component by the destination's color

**`constant`** {number}

___

###  GL_DYNAMIC_COPY

Ƭ **GL_DYNAMIC_COPY**: *35050*

*Defined in [src/js/GPX/webgl/constants.ts:3024](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L3024)*

**`constant`** {number}

___

###  GL_DYNAMIC_DRAW

Ƭ **GL_DYNAMIC_DRAW**: *35048*

*Defined in [src/js/GPX/webgl/constants.ts:560](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L560)*

Passed to bufferData as a hint about whether the contents of the buffer are likely to be used often and change often

**`constant`** {number}

___

###  GL_DYNAMIC_READ

Ƭ **GL_DYNAMIC_READ**: *35049*

*Defined in [src/js/GPX/webgl/constants.ts:3019](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L3019)*

**`constant`** {number}

___

###  GL_ELEMENT_ARRAY_BUFFER

Ƭ **GL_ELEMENT_ARRAY_BUFFER**: *34963*

*Defined in [src/js/GPX/webgl/constants.ts:572](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L572)*

Passed to bindBuffer or bufferData to specify the type of buffer being used

**`constant`** {number}

___

###  GL_ELEMENT_ARRAY_BUFFER_BINDING

Ƭ **GL_ELEMENT_ARRAY_BUFFER_BINDING**: *34965*

*Defined in [src/js/GPX/webgl/constants.ts:257](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L257)*

Passed to getParameter to get the current element array buffer

**`constant`** {number}

___

###  GL_EQUAL

Ƭ **GL_EQUAL**: *514*

*Defined in [src/js/GPX/webgl/constants.ts:1009](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1009)*

Passed to depthFunction or stencilFunction to specify depth or stencil tests will pass if the new depth value is equals to the stored value

**`constant`** {number}

___

###  GL_FASTEST

Ƭ **GL_FASTEST**: *4353*

*Defined in [src/js/GPX/webgl/constants.ts:775](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L775)*

The most efficient behavior should be used

**`constant`** {number}

___

###  GL_FLOAT

Ƭ **GL_FLOAT**: *5126*

*Defined in [src/js/GPX/webgl/constants.ts:824](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L824)*

**`constant`** {number}

___

###  GL_FLOAT_32_UNSIGNED_INT_24_8_REV

Ƭ **GL_FLOAT_32_UNSIGNED_INT_24_8_REV**: *36269*

*Defined in [src/js/GPX/webgl/constants.ts:2187](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2187)*

**`constant`** {number}

___

###  GL_FLOAT_MAT2

Ƭ **GL_FLOAT_MAT2**: *35674*

*Defined in [src/js/GPX/webgl/constants.ts:1449](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1449)*

**`constant`** {number}

___

###  GL_FLOAT_MAT2X3

Ƭ **GL_FLOAT_MAT2X3**: *35685*

*Defined in [src/js/GPX/webgl/constants.ts:2532](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2532)*

**`constant`** {number}

___

###  GL_FLOAT_MAT2X4

Ƭ **GL_FLOAT_MAT2X4**: *35686*

*Defined in [src/js/GPX/webgl/constants.ts:2537](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2537)*

**`constant`** {number}

___

###  GL_FLOAT_MAT3

Ƭ **GL_FLOAT_MAT3**: *35675*

*Defined in [src/js/GPX/webgl/constants.ts:1454](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1454)*

**`constant`** {number}

___

###  GL_FLOAT_MAT3X2

Ƭ **GL_FLOAT_MAT3X2**: *35687*

*Defined in [src/js/GPX/webgl/constants.ts:2542](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2542)*

**`constant`** {number}

___

###  GL_FLOAT_MAT3X4

Ƭ **GL_FLOAT_MAT3X4**: *35688*

*Defined in [src/js/GPX/webgl/constants.ts:2547](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2547)*

**`constant`** {number}

___

###  GL_FLOAT_MAT4

Ƭ **GL_FLOAT_MAT4**: *35676*

*Defined in [src/js/GPX/webgl/constants.ts:1459](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1459)*

**`constant`** {number}

___

###  GL_FLOAT_MAT4X2

Ƭ **GL_FLOAT_MAT4X2**: *35689*

*Defined in [src/js/GPX/webgl/constants.ts:2552](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2552)*

**`constant`** {number}

___

###  GL_FLOAT_MAT4X3

Ƭ **GL_FLOAT_MAT4X3**: *35690*

*Defined in [src/js/GPX/webgl/constants.ts:2557](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2557)*

**`constant`** {number}

___

###  GL_FLOAT_VEC2

Ƭ **GL_FLOAT_VEC2**: *35664*

*Defined in [src/js/GPX/webgl/constants.ts:1399](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1399)*

**`constant`** {number}

___

###  GL_FLOAT_VEC3

Ƭ **GL_FLOAT_VEC3**: *35665*

*Defined in [src/js/GPX/webgl/constants.ts:1404](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1404)*

**`constant`** {number}

___

###  GL_FLOAT_VEC4

Ƭ **GL_FLOAT_VEC4**: *35666*

*Defined in [src/js/GPX/webgl/constants.ts:1409](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1409)*

**`constant`** {number}

___

###  GL_FRAGMENT_SHADER

Ƭ **GL_FRAGMENT_SHADER**: *35632*

*Defined in [src/js/GPX/webgl/constants.ts:882](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L882)*

Passed to createShader to define a fragment shader

**`constant`** {number}

___

###  GL_FRAGMENT_SHADER_DERIVATIVE_HINT

Ƭ **GL_FRAGMENT_SHADER_DERIVATIVE_HINT**: *35723*

*Defined in [src/js/GPX/webgl/constants.ts:1812](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1812)*

**`constant`** {number}

___

###  GL_FRAGMENT_SHADER_DERIVATIVE_HINT_OES

Ƭ **GL_FRAGMENT_SHADER_DERIVATIVE_HINT_OES**: *35723*

*Defined in [src/js/GPX/webgl/constants.ts:3515](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L3515)*

Indicates the accuracy of the derivative calculation for the GLSL built-in functions: dFdx, dFdy, and fwidth

**`constant`** {number}

___

###  GL_FRAMEBUFFER

Ƭ **GL_FRAMEBUFFER**: *36160*

*Defined in [src/js/GPX/webgl/constants.ts:1508](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1508)*

**`constant`** {number}

___

###  GL_FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE

Ƭ **GL_FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE**: *33301*

*Defined in [src/js/GPX/webgl/constants.ts:2708](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2708)*

**`constant`** {number}

___

###  GL_FRAMEBUFFER_ATTACHMENT_BLUE_SIZE

Ƭ **GL_FRAMEBUFFER_ATTACHMENT_BLUE_SIZE**: *33300*

*Defined in [src/js/GPX/webgl/constants.ts:2703](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2703)*

**`constant`** {number}

___

###  GL_FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING

Ƭ **GL_FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING**: *33296*

*Defined in [src/js/GPX/webgl/constants.ts:2683](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2683)*

**`constant`** {number}

___

###  GL_FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING_EXT

Ƭ **GL_FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING_EXT**: *33296*

*Defined in [src/js/GPX/webgl/constants.ts:3507](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L3507)*

Returns the framebuffer color encoding

**`constant`** {number}

___

###  GL_FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE

Ƭ **GL_FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE**: *33297*

*Defined in [src/js/GPX/webgl/constants.ts:2688](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2688)*

**`constant`** {number}

___

###  GL_FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT

Ƭ **GL_FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT**: *33297*

*Defined in [src/js/GPX/webgl/constants.ts:3462](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L3462)*

**`constant`** {number}

___

###  GL_FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE

Ƭ **GL_FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE**: *33302*

*Defined in [src/js/GPX/webgl/constants.ts:2713](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2713)*

**`constant`** {number}

___

###  GL_FRAMEBUFFER_ATTACHMENT_GREEN_SIZE

Ƭ **GL_FRAMEBUFFER_ATTACHMENT_GREEN_SIZE**: *33299*

*Defined in [src/js/GPX/webgl/constants.ts:2698](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2698)*

**`constant`** {number}

___

###  GL_FRAMEBUFFER_ATTACHMENT_OBJECT_NAME

Ƭ **GL_FRAMEBUFFER_ATTACHMENT_OBJECT_NAME**: *36049*

*Defined in [src/js/GPX/webgl/constants.ts:1603](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1603)*

**`constant`** {number}

___

###  GL_FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE

Ƭ **GL_FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE**: *36048*

*Defined in [src/js/GPX/webgl/constants.ts:1598](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1598)*

**`constant`** {number}

___

###  GL_FRAMEBUFFER_ATTACHMENT_RED_SIZE

Ƭ **GL_FRAMEBUFFER_ATTACHMENT_RED_SIZE**: *33298*

*Defined in [src/js/GPX/webgl/constants.ts:2693](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2693)*

**`constant`** {number}

___

###  GL_FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE

Ƭ **GL_FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE**: *33303*

*Defined in [src/js/GPX/webgl/constants.ts:2718](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2718)*

**`constant`** {number}

___

###  GL_FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE

Ƭ **GL_FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE**: *36051*

*Defined in [src/js/GPX/webgl/constants.ts:1613](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1613)*

**`constant`** {number}

___

###  GL_FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER

Ƭ **GL_FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER**: *36052*

*Defined in [src/js/GPX/webgl/constants.ts:2758](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2758)*

**`constant`** {number}

___

###  GL_FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL

Ƭ **GL_FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL**: *36050*

*Defined in [src/js/GPX/webgl/constants.ts:1608](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1608)*

**`constant`** {number}

___

###  GL_FRAMEBUFFER_BINDING

Ƭ **GL_FRAMEBUFFER_BINDING**: *36006*

*Defined in [src/js/GPX/webgl/constants.ts:1668](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1668)*

**`constant`** {number}

___

###  GL_FRAMEBUFFER_COMPLETE

Ƭ **GL_FRAMEBUFFER_COMPLETE**: *36053*

*Defined in [src/js/GPX/webgl/constants.ts:1643](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1643)*

**`constant`** {number}

___

###  GL_FRAMEBUFFER_DEFAULT

Ƭ **GL_FRAMEBUFFER_DEFAULT**: *33304*

*Defined in [src/js/GPX/webgl/constants.ts:2723](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2723)*

**`constant`** {number}

___

###  GL_FRAMEBUFFER_INCOMPLETE_ATTACHMENT

Ƭ **GL_FRAMEBUFFER_INCOMPLETE_ATTACHMENT**: *36054*

*Defined in [src/js/GPX/webgl/constants.ts:1648](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1648)*

**`constant`** {number}

___

###  GL_FRAMEBUFFER_INCOMPLETE_DIMENSIONS

Ƭ **GL_FRAMEBUFFER_INCOMPLETE_DIMENSIONS**: *36057*

*Defined in [src/js/GPX/webgl/constants.ts:1658](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1658)*

**`constant`** {number}

___

###  GL_FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT

Ƭ **GL_FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT**: *36055*

*Defined in [src/js/GPX/webgl/constants.ts:1653](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1653)*

**`constant`** {number}

___

###  GL_FRAMEBUFFER_INCOMPLETE_MULTISAMPLE

Ƭ **GL_FRAMEBUFFER_INCOMPLETE_MULTISAMPLE**: *36182*

*Defined in [src/js/GPX/webgl/constants.ts:2763](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2763)*

**`constant`** {number}

___

###  GL_FRAMEBUFFER_UNSUPPORTED

Ƭ **GL_FRAMEBUFFER_UNSUPPORTED**: *36061*

*Defined in [src/js/GPX/webgl/constants.ts:1663](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1663)*

**`constant`** {number}

___

###  GL_FRONT

Ƭ **GL_FRONT**: *1028*

*Defined in [src/js/GPX/webgl/constants.ts:643](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L643)*

Passed to cullFace to specify that only front faces should be culled

**`constant`** {number}

___

###  GL_FRONT_AND_BACK

Ƭ **GL_FRONT_AND_BACK**: *1032*

*Defined in [src/js/GPX/webgl/constants.ts:655](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L655)*

Passed to cullFace to specify that front and back faces should be culled

**`constant`** {number}

___

###  GL_FRONT_FACE

Ƭ **GL_FRONT_FACE**: *2886*

*Defined in [src/js/GPX/webgl/constants.ts:287](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L287)*

Passed to getParameter to determine the current value of frontFace. Should return CW or CCW

**`constant`** {number}

___

###  GL_FUNC_ADD

Ƭ **GL_FUNC_ADD**: *32774*

*Defined in [src/js/GPX/webgl/constants.ts:182](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L182)*

Passed to blendEquation or blendEquationSeparate to set an addition blend function

**`constant`** {number}

___

###  GL_FUNC_REVERSE_SUBTRACT

Ƭ **GL_FUNC_REVERSE_SUBTRACT**: *32779*

*Defined in [src/js/GPX/webgl/constants.ts:194](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L194)*

Passed to blendEquation or blendEquationSeparate to specify a reverse subtraction blend function (destination - source)

**`constant`** {number}

___

###  GL_FUNC_SUBSTRACT

Ƭ **GL_FUNC_SUBSTRACT**: *32778*

*Defined in [src/js/GPX/webgl/constants.ts:188](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L188)*

Passed to blendEquation or blendEquationSeparate to specify a subtraction blend function (source - destination)

**`constant`** {number}

___

###  GL_GENERATE_MIPMAP_HINT

Ƭ **GL_GENERATE_MIPMAP_HINT**: *33170*

*Defined in [src/js/GPX/webgl/constants.ts:787](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L787)*

Hint for the quality of filtering when generating mipmap images with WebGLRenderingContext.generateMipmap()

**`constant`** {number}

___

###  GL_GEQUAL

Ƭ **GL_GEQUAL**: *518*

*Defined in [src/js/GPX/webgl/constants.ts:1027](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1027)*

Passed to depthFunction or stencilFunction to specify depth or stencil tests will pass if the new depth value is greater than or equal to the stored value

**`constant`** {number}

___

###  GL_GPU_DISJOINT_EXT

Ƭ **GL_GPU_DISJOINT_EXT**: *36795*

*Defined in [src/js/GPX/webgl/constants.ts:3773](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L3773)*

A Boolean indicating whether or not the GPU performed any disjoint operation

**`constant`** {number}

___

###  GL_GREATER

Ƭ **GL_GREATER**: *516*

*Defined in [src/js/GPX/webgl/constants.ts:1021](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1021)*

Passed to depthFunction or stencilFunction to specify depth or stencil tests will pass if the new depth value is greater than the stored value

**`constant`** {number}

___

###  GL_GREEN_BITS

Ƭ **GL_GREEN_BITS**: *3411*

*Defined in [src/js/GPX/webgl/constants.ts:449](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L449)*

**`constant`** {number}

___

###  GL_HALF_FLOAT

Ƭ **GL_HALF_FLOAT**: *5131*

*Defined in [src/js/GPX/webgl/constants.ts:2197](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2197)*

**`constant`** {number}

___

###  GL_HALF_FLOAT_OES

Ƭ **GL_HALF_FLOAT_OES**: *36193*

*Defined in [src/js/GPX/webgl/constants.ts:3443](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L3443)*

Half floating-point type (16-bit)

**`constant`** {number}

___

###  GL_HIGH_FLOAT

Ƭ **GL_HIGH_FLOAT**: *36338*

*Defined in [src/js/GPX/webgl/constants.ts:1486](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1486)*

**`constant`** {number}

___

###  GL_HIGH_INT

Ƭ **GL_HIGH_INT**: *36341*

*Defined in [src/js/GPX/webgl/constants.ts:1501](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1501)*

**`constant`** {number}

___

###  GL_IMPLEMENTATION_COLOR_READ_FORMAT

Ƭ **GL_IMPLEMENTATION_COLOR_READ_FORMAT**: *35739*

*Defined in [src/js/GPX/webgl/constants.ts:534](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L534)*

**`constant`** {number}

___

###  GL_IMPLEMENTATION_COLOR_READ_TYPE

Ƭ **GL_IMPLEMENTATION_COLOR_READ_TYPE**: *35738*

*Defined in [src/js/GPX/webgl/constants.ts:529](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L529)*

**`constant`** {number}

___

###  GL_INCR

Ƭ **GL_INCR**: *7682*

*Defined in [src/js/GPX/webgl/constants.ts:1051](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1051)*

**`constant`** {number}

___

###  GL_INCR_WRAP

Ƭ **GL_INCR_WRAP**: *34055*

*Defined in [src/js/GPX/webgl/constants.ts:1066](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1066)*

**`constant`** {number}

___

###  GL_INT

Ƭ **GL_INT**: *5124*

*Defined in [src/js/GPX/webgl/constants.ts:814](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L814)*

**`constant`** {number}

___

###  GL_INTERLEAVED_ATTRIBS

Ƭ **GL_INTERLEAVED_ATTRIBS**: *35980*

*Defined in [src/js/GPX/webgl/constants.ts:2641](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2641)*

**`constant`** {number}

___

###  GL_INT_2_10_10_10_REV

Ƭ **GL_INT_2_10_10_10_REV**: *36255*

*Defined in [src/js/GPX/webgl/constants.ts:2212](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2212)*

**`constant`** {number}

___

###  GL_INT_SAMPLER_2D

Ƭ **GL_INT_SAMPLER_2D**: *36298*

*Defined in [src/js/GPX/webgl/constants.ts:2438](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2438)*

**`constant`** {number}

___

###  GL_INT_SAMPLER_2D_ARRAY

Ƭ **GL_INT_SAMPLER_2D_ARRAY**: *36303*

*Defined in [src/js/GPX/webgl/constants.ts:2453](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2453)*

**`constant`** {number}

___

###  GL_INT_SAMPLER_3D

Ƭ **GL_INT_SAMPLER_3D**: *36299*

*Defined in [src/js/GPX/webgl/constants.ts:2443](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2443)*

**`constant`** {number}

___

###  GL_INT_SAMPLER_CUBE

Ƭ **GL_INT_SAMPLER_CUBE**: *36300*

*Defined in [src/js/GPX/webgl/constants.ts:2448](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2448)*

**`constant`** {number}

___

###  GL_INT_VEC2

Ƭ **GL_INT_VEC2**: *35667*

*Defined in [src/js/GPX/webgl/constants.ts:1414](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1414)*

**`constant`** {number}

___

###  GL_INT_VEC3

Ƭ **GL_INT_VEC3**: *35668*

*Defined in [src/js/GPX/webgl/constants.ts:1419](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1419)*

**`constant`** {number}

___

###  GL_INT_VEC4

Ƭ **GL_INT_VEC4**: *35669*

*Defined in [src/js/GPX/webgl/constants.ts:1424](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1424)*

**`constant`** {number}

___

###  GL_INVALID_ENUM

Ƭ **GL_INVALID_ENUM**: *1280*

*Defined in [src/js/GPX/webgl/constants.ts:721](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L721)*

Returned from getError

**`constant`** {number}

___

###  GL_INVALID_FRAMEBUFFER_OPERATION

Ƭ **GL_INVALID_FRAMEBUFFER_OPERATION**: *1286*

*Defined in [src/js/GPX/webgl/constants.ts:1683](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1683)*

**`constant`** {number}

___

###  GL_INVALID_INDEX

Ƭ **GL_INVALID_INDEX**: *4294967295*

*Defined in [src/js/GPX/webgl/constants.ts:3039](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L3039)*

**`constant`** {number}

___

###  GL_INVALID_OPERATION

Ƭ **GL_INVALID_OPERATION**: *1282*

*Defined in [src/js/GPX/webgl/constants.ts:733](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L733)*

Returned from getError

**`constant`** {number}

___

###  GL_INVALID_VALUE

Ƭ **GL_INVALID_VALUE**: *1281*

*Defined in [src/js/GPX/webgl/constants.ts:727](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L727)*

Returned from getError

**`constant`** {number}

___

###  GL_INVERT

Ƭ **GL_INVERT**: *5386*

*Defined in [src/js/GPX/webgl/constants.ts:1061](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1061)*

**`constant`** {number}

___

###  GL_KEEP

Ƭ **GL_KEEP**: *7680*

*Defined in [src/js/GPX/webgl/constants.ts:1041](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1041)*

**`constant`** {number}

___

###  GL_LEQUAL

Ƭ **GL_LEQUAL**: *515*

*Defined in [src/js/GPX/webgl/constants.ts:1015](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1015)*

 Passed to depthFunction or stencilFunction to specify depth or stencil tests will pass if the new depth value is less than or equal to the stored value

**`constant`** {number}

___

###  GL_LESS

Ƭ **GL_LESS**: *513*

*Defined in [src/js/GPX/webgl/constants.ts:1003](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1003)*

Passed to depthFunction or stencilFunction to specify depth or stencil tests will pass if the new depth value is less than the stored value

**`constant`** {number}

___

###  GL_LINEAR

Ƭ **GL_LINEAR**: *9729*

*Defined in [src/js/GPX/webgl/constants.ts:1084](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1084)*

**`constant`** {number}

___

###  GL_LINEAR_MIPMAP_LINEAR

Ƭ **GL_LINEAR_MIPMAP_LINEAR**: *9987*

*Defined in [src/js/GPX/webgl/constants.ts:1104](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1104)*

**`constant`** {number}

___

###  GL_LINEAR_MIPMAP_NEAREST

Ƭ **GL_LINEAR_MIPMAP_NEAREST**: *9985*

*Defined in [src/js/GPX/webgl/constants.ts:1094](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1094)*

**`constant`** {number}

___

###  GL_LINES

Ƭ **GL_LINES**: *1*

*Defined in [src/js/GPX/webgl/constants.ts:50](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L50)*

Passed to drawElements or drawArrays to draw lines. Each vertex connects to the one after it

**`constant`** {number}

___

###  GL_LINE_LOOP

Ƭ **GL_LINE_LOOP**: *2*

*Defined in [src/js/GPX/webgl/constants.ts:56](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L56)*

Passed to drawElements or drawArrays to draw lines. Each set of two vertices is treated as a separate line segment

**`constant`** {number}

___

###  GL_LINE_STRIP

Ƭ **GL_LINE_STRIP**: *3*

*Defined in [src/js/GPX/webgl/constants.ts:62](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L62)*

Passed to drawElements or drawArrays to draw a connected group of line segments from the first vertex to the last

**`constant`** {number}

___

###  GL_LINE_WIDTH

Ƭ **GL_LINE_WIDTH**: *2849*

*Defined in [src/js/GPX/webgl/constants.ts:263](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L263)*

Passed to getParameter to get the current lineWidth (set by the lineWidth method)

**`constant`** {number}

___

###  GL_LINK_STATUS

Ƭ **GL_LINK_STATUS**: *35714*

*Defined in [src/js/GPX/webgl/constants.ts:906](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L906)*

Passed to getProgramParameter after calling linkProgram to determine if a program was linked correctly. Returns false if there were errors. Use getProgramInfoLog to find the exact error

**`constant`** {number}

___

###  GL_LOW_FLOAT

Ƭ **GL_LOW_FLOAT**: *36336*

*Defined in [src/js/GPX/webgl/constants.ts:1476](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1476)*

**`constant`** {number}

___

###  GL_LOW_INT

Ƭ **GL_LOW_INT**: *36339*

*Defined in [src/js/GPX/webgl/constants.ts:1491](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1491)*

**`constant`** {number}

___

###  GL_LUMINANCE

Ƭ **GL_LUMINANCE**: *6409*

*Defined in [src/js/GPX/webgl/constants.ts:851](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L851)*

**`constant`** {number}

___

###  GL_LUMINANCE_ALPHA

Ƭ **GL_LUMINANCE_ALPHA**: *6410*

*Defined in [src/js/GPX/webgl/constants.ts:856](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L856)*

**`constant`** {number}

___

###  GL_MAX

Ƭ **GL_MAX**: *32776*

*Defined in [src/js/GPX/webgl/constants.ts:2989](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2989)*

**`constant`** {number}

___

###  GL_MAX_3D_TEXTURE_SIZE

Ƭ **GL_MAX_3D_TEXTURE_SIZE**: *32883*

*Defined in [src/js/GPX/webgl/constants.ts:1762](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1762)*

**`constant`** {number}

___

###  GL_MAX_ARRAY_TEXTURE_LAYERS

Ƭ **GL_MAX_ARRAY_TEXTURE_LAYERS**: *35071*

*Defined in [src/js/GPX/webgl/constants.ts:1792](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1792)*

**`constant`** {number}

___

###  GL_MAX_CLIENT_WAIT_TIMEOUT_WEBGL

Ƭ **GL_MAX_CLIENT_WAIT_TIMEOUT_WEBGL**: *37447*

*Defined in [src/js/GPX/webgl/constants.ts:3049](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L3049)*

**`constant`** {number}

___

###  GL_MAX_COLOR_ATTACHMENTS

Ƭ **GL_MAX_COLOR_ATTACHMENTS**: *36063*

*Defined in [src/js/GPX/webgl/constants.ts:2331](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2331)*

**`constant`** {number}

___

###  GL_MAX_COLOR_ATTACHMENTS_WEBGL

Ƭ **GL_MAX_COLOR_ATTACHMENTS_WEBGL**: *36063*

*Defined in [src/js/GPX/webgl/constants.ts:3715](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L3715)*

Maximum number of framebuffer color attachment points

**`constant`** {number}

___

###  GL_MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS

Ƭ **GL_MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS**: *35379*

*Defined in [src/js/GPX/webgl/constants.ts:2820](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2820)*

**`constant`** {number}

___

###  GL_MAX_COMBINED_TEXTURE_IMAGE_UNITS

Ƭ **GL_MAX_COMBINED_TEXTURE_IMAGE_UNITS**: *35661*

*Defined in [src/js/GPX/webgl/constants.ts:951](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L951)*

**`constant`** {number}

___

###  GL_MAX_COMBINED_UNIFORM_BLOCKS

Ƭ **GL_MAX_COMBINED_UNIFORM_BLOCKS**: *35374*

*Defined in [src/js/GPX/webgl/constants.ts:2800](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2800)*

**`constant`** {number}

___

###  GL_MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS

Ƭ **GL_MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS**: *35377*

*Defined in [src/js/GPX/webgl/constants.ts:2815](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2815)*

**`constant`** {number}

___

###  GL_MAX_CUBE_MAP_TEXTURE_SIZE

Ƭ **GL_MAX_CUBE_MAP_TEXTURE_SIZE**: *34076*

*Defined in [src/js/GPX/webgl/constants.ts:1179](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1179)*

**`constant`** {number}

___

###  GL_MAX_DRAW_BUFFERS

Ƭ **GL_MAX_DRAW_BUFFERS**: *34852*

*Defined in [src/js/GPX/webgl/constants.ts:2246](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2246)*

**`constant`** {number}

___

###  GL_MAX_DRAW_BUFFERS_WEBGL

Ƭ **GL_MAX_DRAW_BUFFERS_WEBGL**: *34852*

*Defined in [src/js/GPX/webgl/constants.ts:3721](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L3721)*

Maximum number of draw buffers

**`constant`** {number}

___

###  GL_MAX_ELEMENTS_INDICES

Ƭ **GL_MAX_ELEMENTS_INDICES**: *33001*

*Defined in [src/js/GPX/webgl/constants.ts:1772](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1772)*

**`constant`** {number}

___

###  GL_MAX_ELEMENTS_VERTICES

Ƭ **GL_MAX_ELEMENTS_VERTICES**: *33000*

*Defined in [src/js/GPX/webgl/constants.ts:1767](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1767)*

**`constant`** {number}

___

###  GL_MAX_ELEMENT_INDEX

Ƭ **GL_MAX_ELEMENT_INDEX**: *36203*

*Defined in [src/js/GPX/webgl/constants.ts:1842](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1842)*

**`constant`** {number}

___

###  GL_MAX_EXT

Ƭ **GL_MAX_EXT**: *32776*

*Defined in [src/js/GPX/webgl/constants.ts:3481](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L3481)*

Produces the maximum color components of the source and destination colors

**`constant`** {number}

___

###  GL_MAX_FRAGMENT_INPUT_COMPONENTS

Ƭ **GL_MAX_FRAGMENT_INPUT_COMPONENTS**: *37157*

*Defined in [src/js/GPX/webgl/constants.ts:1832](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1832)*

**`constant`** {number}

___

###  GL_MAX_FRAGMENT_UNIFORM_BLOCKS

Ƭ **GL_MAX_FRAGMENT_UNIFORM_BLOCKS**: *35373*

*Defined in [src/js/GPX/webgl/constants.ts:2795](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2795)*

**`constant`** {number}

___

###  GL_MAX_FRAGMENT_UNIFORM_COMPONENTS

Ƭ **GL_MAX_FRAGMENT_UNIFORM_COMPONENTS**: *35657*

*Defined in [src/js/GPX/webgl/constants.ts:1782](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1782)*

**`constant`** {number}

___

###  GL_MAX_FRAGMENT_UNIFORM_VECTORS

Ƭ **GL_MAX_FRAGMENT_UNIFORM_VECTORS**: *36349*

*Defined in [src/js/GPX/webgl/constants.ts:967](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L967)*

**`constant`** {number}

___

###  GL_MAX_PROGRAM_TEXEL_OFFSET

Ƭ **GL_MAX_PROGRAM_TEXEL_OFFSET**: *35077*

*Defined in [src/js/GPX/webgl/constants.ts:1802](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1802)*

**`constant`** {number}

___

###  GL_MAX_RENDERBUFFER_SIZE

Ƭ **GL_MAX_RENDERBUFFER_SIZE**: *34024*

*Defined in [src/js/GPX/webgl/constants.ts:1678](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1678)*

**`constant`** {number}

___

###  GL_MAX_SAMPLES

Ƭ **GL_MAX_SAMPLES**: *36183*

*Defined in [src/js/GPX/webgl/constants.ts:2478](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2478)*

**`constant`** {number}

___

###  GL_MAX_SERVER_WAIT_TIMEOUT

Ƭ **GL_MAX_SERVER_WAIT_TIMEOUT**: *37137*

*Defined in [src/js/GPX/webgl/constants.ts:1837](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1837)*

**`constant`** {number}

___

###  GL_MAX_TEXTURE_IMAGE_UNITS

Ƭ **GL_MAX_TEXTURE_IMAGE_UNITS**: *34930*

*Defined in [src/js/GPX/webgl/constants.ts:962](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L962)*

Implementation dependent number of maximum texture units. At least 8

**`constant`** {number}

___

###  GL_MAX_TEXTURE_LOD_BIAS

Ƭ **GL_MAX_TEXTURE_LOD_BIAS**: *34045*

*Defined in [src/js/GPX/webgl/constants.ts:1777](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1777)*

**`constant`** {number}

___

###  GL_MAX_TEXTURE_MAX_ANISOTROPY_EXT

Ƭ **GL_MAX_TEXTURE_MAX_ANISOTROPY_EXT**: *34047*

*Defined in [src/js/GPX/webgl/constants.ts:3081](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L3081)*

Returns the maximum available anisotropy

**`constant`** {number}

___

###  GL_MAX_TEXTURE_SIZE

Ƭ **GL_MAX_TEXTURE_SIZE**: *3379*

*Defined in [src/js/GPX/webgl/constants.ts:429](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L429)*

**`constant`** {number}

___

###  GL_MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS

Ƭ **GL_MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS**: *35978*

*Defined in [src/js/GPX/webgl/constants.ts:2631](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2631)*

**`constant`** {number}

___

###  GL_MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS

Ƭ **GL_MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS**: *35979*

*Defined in [src/js/GPX/webgl/constants.ts:2636](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2636)*

**`constant`** {number}

___

###  GL_MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS

Ƭ **GL_MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS**: *35968*

*Defined in [src/js/GPX/webgl/constants.ts:2606](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2606)*

**`constant`** {number}

___

###  GL_MAX_UNIFORM_BLOCK_SIZE

Ƭ **GL_MAX_UNIFORM_BLOCK_SIZE**: *35376*

*Defined in [src/js/GPX/webgl/constants.ts:2810](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2810)*

**`constant`** {number}

___

###  GL_MAX_UNIFORM_BUFFER_BINDINGS

Ƭ **GL_MAX_UNIFORM_BUFFER_BINDINGS**: *35375*

*Defined in [src/js/GPX/webgl/constants.ts:2805](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2805)*

**`constant`** {number}

___

###  GL_MAX_VARYING_COMPONENTS

Ƭ **GL_MAX_VARYING_COMPONENTS**: *35659*

*Defined in [src/js/GPX/webgl/constants.ts:1807](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1807)*

**`constant`** {number}

___

###  GL_MAX_VARYING_VECTORS

Ƭ **GL_MAX_VARYING_VECTORS**: *36348*

*Defined in [src/js/GPX/webgl/constants.ts:946](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L946)*

**`constant`** {number}

___

###  GL_MAX_VERTEX_ATTRIBS

Ƭ **GL_MAX_VERTEX_ATTRIBS**: *34921*

*Defined in [src/js/GPX/webgl/constants.ts:936](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L936)*

The maximum number of entries possible in the vertex attribute list

**`constant`** {number}

___

###  GL_MAX_VERTEX_OUTPUT_COMPONENTS

Ƭ **GL_MAX_VERTEX_OUTPUT_COMPONENTS**: *37154*

*Defined in [src/js/GPX/webgl/constants.ts:1827](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1827)*

**`constant`** {number}

___

###  GL_MAX_VERTEX_TEXTURE_IMAGE_UNITS

Ƭ **GL_MAX_VERTEX_TEXTURE_IMAGE_UNITS**: *35660*

*Defined in [src/js/GPX/webgl/constants.ts:956](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L956)*

**`constant`** {number}

___

###  GL_MAX_VERTEX_UNIFORM_BLOCKS

Ƭ **GL_MAX_VERTEX_UNIFORM_BLOCKS**: *35371*

*Defined in [src/js/GPX/webgl/constants.ts:2790](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2790)*

**`constant`** {number}

___

###  GL_MAX_VERTEX_UNIFORM_COMPONENTS

Ƭ **GL_MAX_VERTEX_UNIFORM_COMPONENTS**: *35658*

*Defined in [src/js/GPX/webgl/constants.ts:1787](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1787)*

**`constant`** {number}

___

###  GL_MAX_VERTEX_UNIFORM_VECTORS

Ƭ **GL_MAX_VERTEX_UNIFORM_VECTORS**: *36347*

*Defined in [src/js/GPX/webgl/constants.ts:941](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L941)*

**`constant`** {number}

___

###  GL_MAX_VIEWPORT_DIMS

Ƭ **GL_MAX_VIEWPORT_DIMS**: *3386*

*Defined in [src/js/GPX/webgl/constants.ts:434](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L434)*

**`constant`** {number}

___

###  GL_MEDIUM_FLOAT

Ƭ **GL_MEDIUM_FLOAT**: *36337*

*Defined in [src/js/GPX/webgl/constants.ts:1481](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1481)*

**`constant`** {number}

___

###  GL_MEDIUM_INT

Ƭ **GL_MEDIUM_INT**: *36340*

*Defined in [src/js/GPX/webgl/constants.ts:1496](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1496)*

**`constant`** {number}

___

###  GL_MIN

Ƭ **GL_MIN**: *32775*

*Defined in [src/js/GPX/webgl/constants.ts:2984](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2984)*

**`constant`** {number}

___

###  GL_MIN_EXT

Ƭ **GL_MIN_EXT**: *32775*

*Defined in [src/js/GPX/webgl/constants.ts:3475](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L3475)*

Produces the minimum color components of the source and destination colors

**`constant`** {number}

___

###  GL_MIN_PROGRAM_TEXEL_OFFSET

Ƭ **GL_MIN_PROGRAM_TEXEL_OFFSET**: *35076*

*Defined in [src/js/GPX/webgl/constants.ts:1797](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1797)*

**`constant`** {number}

___

###  GL_MIRRORED_REPEAT

Ƭ **GL_MIRRORED_REPEAT**: *33648*

*Defined in [src/js/GPX/webgl/constants.ts:1392](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1392)*

**`constant`** {number}

___

###  GL_NEAREST

Ƭ **GL_NEAREST**: *9728*

*Defined in [src/js/GPX/webgl/constants.ts:1079](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1079)*

**`constant`** {number}

___

###  GL_NEAREST_MIPMAP_LINEAR

Ƭ **GL_NEAREST_MIPMAP_LINEAR**: *9986*

*Defined in [src/js/GPX/webgl/constants.ts:1099](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1099)*

**`constant`** {number}

___

###  GL_NEAREST_MIPMAP_NEAREST

Ƭ **GL_NEAREST_MIPMAP_NEAREST**: *9984*

*Defined in [src/js/GPX/webgl/constants.ts:1089](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1089)*

**`constant`** {number}

___

###  GL_NEVER

Ƭ **GL_NEVER**: *512*

*Defined in [src/js/GPX/webgl/constants.ts:991](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L991)*

Passed to depthFunction or stencilFunction to specify depth or stencil tests will never pass. i.e. Nothing will be drawn

**`constant`** {number}

___

###  GL_NICEST

Ƭ **GL_NICEST**: *4354*

*Defined in [src/js/GPX/webgl/constants.ts:781](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L781)*

The most correct or the highest quality option should be used

**`constant`** {number}

___

###  GL_NONE

Ƭ **GL_NONE**: *0*

*Defined in [src/js/GPX/webgl/constants.ts:1638](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1638)*

**`constant`** {number}

___

###  GL_NOTEQUAL

Ƭ **GL_NOTEQUAL**: *517*

*Defined in [src/js/GPX/webgl/constants.ts:1033](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1033)*

Passed to depthFunction or stencilFunction to specify depth or stencil tests will pass if the new depth value is not equal to the stored value

**`constant`** {number}

___

###  GL_NO_ERROR

Ƭ **GL_NO_ERROR**: *0*

*Defined in [src/js/GPX/webgl/constants.ts:715](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L715)*

Returned from getError

**`constant`** {number}

___

###  GL_OBJECT_TYPE

Ƭ **GL_OBJECT_TYPE**: *37138*

*Defined in [src/js/GPX/webgl/constants.ts:2902](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2902)*

**`constant`** {number}

___

###  GL_ONE

Ƭ **GL_ONE**: *1*

*Defined in [src/js/GPX/webgl/constants.ts:95](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L95)*

Passed to blendFunc or blendFuncSeparate to turn on a component

**`constant`** {number}

___

###  GL_ONE_MINUS_CONSTANT_ALPHA

Ƭ **GL_ONE_MINUS_CONSTANT_ALPHA**: *32772*

*Defined in [src/js/GPX/webgl/constants.ts:173](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L173)*

Passed to blendFunc or blendFuncSeparate to specify one minus a constant alpha blend function

**`constant`** {number}

___

###  GL_ONE_MINUS_CONSTANT_COLOR

Ƭ **GL_ONE_MINUS_CONSTANT_COLOR**: *32770*

*Defined in [src/js/GPX/webgl/constants.ts:161](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L161)*

Passed to blendFunc or blendFuncSeparate to specify one minus a constant color blend function

**`constant`** {number}

___

###  GL_ONE_MINUS_DST_ALPHA

Ƭ **GL_ONE_MINUS_DST_ALPHA**: *773*

*Defined in [src/js/GPX/webgl/constants.ts:131](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L131)*

Passed to blendFunc or blendFuncSeparate to multiply a component by one minus the destination's alpha

**`constant`** {number}

___

###  GL_ONE_MINUS_DST_COLOR

Ƭ **GL_ONE_MINUS_DST_COLOR**: *775*

*Defined in [src/js/GPX/webgl/constants.ts:143](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L143)*

Passed to blendFunc or blendFuncSeparate to multiply a component by one minus the destination's color

**`constant`** {number}

___

###  GL_ONE_MINUS_SRC_ALPHA

Ƭ **GL_ONE_MINUS_SRC_ALPHA**: *771*

*Defined in [src/js/GPX/webgl/constants.ts:119](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L119)*

Passed to blendFunc or blendFuncSeparate to multiply a component by one minus the source's alpha

**`constant`** {number}

___

###  GL_ONE_MINUS_SRC_COLOR

Ƭ **GL_ONE_MINUS_SRC_COLOR**: *769*

*Defined in [src/js/GPX/webgl/constants.ts:107](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L107)*

Passed to blendFunc or blendFuncSeparate to multiply a component by one minus the source elements color

**`constant`** {number}

___

###  GL_OUT_OF_MEMORY

Ƭ **GL_OUT_OF_MEMORY**: *1285*

*Defined in [src/js/GPX/webgl/constants.ts:739](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L739)*

Returned from getError

**`constant`** {number}

___

###  GL_PACK_ALIGNMENT

Ƭ **GL_PACK_ALIGNMENT**: *3333*

*Defined in [src/js/GPX/webgl/constants.ts:424](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L424)*

**`constant`** {number}

___

###  GL_PACK_ROW_LENGTH

Ƭ **GL_PACK_ROW_LENGTH**: *3330*

*Defined in [src/js/GPX/webgl/constants.ts:1732](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1732)*

**`constant`** {number}

___

###  GL_PACK_SKIP_PIXELS

Ƭ **GL_PACK_SKIP_PIXELS**: *3332*

*Defined in [src/js/GPX/webgl/constants.ts:1742](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1742)*

**`constant`** {number}

___

###  GL_PACK_SKIP_ROWS

Ƭ **GL_PACK_SKIP_ROWS**: *3331*

*Defined in [src/js/GPX/webgl/constants.ts:1737](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1737)*

**`constant`** {number}

___

###  GL_PIXEL_PACK_BUFFER

Ƭ **GL_PIXEL_PACK_BUFFER**: *35051*

*Defined in [src/js/GPX/webgl/constants.ts:2490](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2490)*

**`constant`** {number}

___

###  GL_PIXEL_PACK_BUFFER_BINDING

Ƭ **GL_PIXEL_PACK_BUFFER_BINDING**: *35053*

*Defined in [src/js/GPX/webgl/constants.ts:2500](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2500)*

**`constant`** {number}

___

###  GL_PIXEL_UNPACK_BUFFER

Ƭ **GL_PIXEL_UNPACK_BUFFER**: *35052*

*Defined in [src/js/GPX/webgl/constants.ts:2495](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2495)*

**`constant`** {number}

___

###  GL_PIXEL_UNPACK_BUFFER_BINDING

Ƭ **GL_PIXEL_UNPACK_BUFFER_BINDING**: *35055*

*Defined in [src/js/GPX/webgl/constants.ts:2505](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2505)*

**`constant`** {number}

___

###  GL_POINTS

Ƭ **GL_POINTS**: *0*

*Defined in [src/js/GPX/webgl/constants.ts:44](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L44)*

Passed to drawElements or drawArrays to draw single points

**`constant`** {number}

___

###  GL_POLYGON_OFFSET_FACTOR

Ƭ **GL_POLYGON_OFFSET_FACTOR**: *32824*

*Defined in [src/js/GPX/webgl/constants.ts:479](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L479)*

**`constant`** {number}

___

###  GL_POLYGON_OFFSET_FILL

Ƭ **GL_POLYGON_OFFSET_FILL**: *32823*

*Defined in [src/js/GPX/webgl/constants.ts:682](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L682)*

Passed to enable/disable to turn on/off the polygon offset. Useful for rendering hidden-line images, decals, and or solids with highlighted edges. Can also be used with getParameter to query the scissor test

**`constant`** {number}

___

###  GL_POLYGON_OFFSET_UNITS

Ƭ **GL_POLYGON_OFFSET_UNITS**: *10752*

*Defined in [src/js/GPX/webgl/constants.ts:474](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L474)*

**`constant`** {number}

___

###  GL_QUERY_COUNTER_BITS_EXT

Ƭ **GL_QUERY_COUNTER_BITS_EXT**: *34916*

*Defined in [src/js/GPX/webgl/constants.ts:3737](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L3737)*

The number of bits used to hold the query result for the given target

**`constant`** {number}

___

###  GL_QUERY_RESULT

Ƭ **GL_QUERY_RESULT**: *34918*

*Defined in [src/js/GPX/webgl/constants.ts:2224](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2224)*

**`constant`** {number}

___

###  GL_QUERY_RESULT_AVAILABLE

Ƭ **GL_QUERY_RESULT_AVAILABLE**: *34919*

*Defined in [src/js/GPX/webgl/constants.ts:2229](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2229)*

**`constant`** {number}

___

###  GL_QUERY_RESULT_AVAILABLE_EXT

Ƭ **GL_QUERY_RESULT_AVAILABLE_EXT**: *34919*

*Defined in [src/js/GPX/webgl/constants.ts:3755](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L3755)*

A Boolean indicating whether or not a query result is available

**`constant`** {number}

___

###  GL_QUERY_RESULT_EXT

Ƭ **GL_QUERY_RESULT_EXT**: *34918*

*Defined in [src/js/GPX/webgl/constants.ts:3749](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L3749)*

The query result

**`constant`** {number}

___

###  GL_R11F_G11F_B10F

Ƭ **GL_R11F_G11F_B10F**: *35898*

*Defined in [src/js/GPX/webgl/constants.ts:1960](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1960)*

**`constant`** {number}

___

###  GL_R16F

Ƭ **GL_R16F**: *33325*

*Defined in [src/js/GPX/webgl/constants.ts:2055](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2055)*

**`constant`** {number}

___

###  GL_R16I

Ƭ **GL_R16I**: *33331*

*Defined in [src/js/GPX/webgl/constants.ts:2085](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2085)*

**`constant`** {number}

___

###  GL_R16UI

Ƭ **GL_R16UI**: *33332*

*Defined in [src/js/GPX/webgl/constants.ts:2090](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2090)*

**`constant`** {number}

___

###  GL_R32F

Ƭ **GL_R32F**: *33326*

*Defined in [src/js/GPX/webgl/constants.ts:2060](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2060)*

**`constant`** {number}

___

###  GL_R32I

Ƭ **GL_R32I**: *33333*

*Defined in [src/js/GPX/webgl/constants.ts:2095](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2095)*

**`constant`** {number}

___

###  GL_R32UI

Ƭ **GL_R32UI**: *33334*

*Defined in [src/js/GPX/webgl/constants.ts:2100](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2100)*

**`constant`** {number}

___

###  GL_R8

Ƭ **GL_R8**: *33321*

*Defined in [src/js/GPX/webgl/constants.ts:2045](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2045)*

**`constant`** {number}

___

###  GL_R8I

Ƭ **GL_R8I**: *33329*

*Defined in [src/js/GPX/webgl/constants.ts:2075](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2075)*

**`constant`** {number}

___

###  GL_R8UI

Ƭ **GL_R8UI**: *33330*

*Defined in [src/js/GPX/webgl/constants.ts:2080](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2080)*

**`constant`** {number}

___

###  GL_R8_SNORM

Ƭ **GL_R8_SNORM**: *36756*

*Defined in [src/js/GPX/webgl/constants.ts:2135](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2135)*

**`constant`** {number}

___

###  GL_RASTERIZER_DISCARD

Ƭ **GL_RASTERIZER_DISCARD**: *35977*

*Defined in [src/js/GPX/webgl/constants.ts:1817](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1817)*

**`constant`** {number}

___

###  GL_READ_BUFFER

Ƭ **GL_READ_BUFFER**: *3074*

*Defined in [src/js/GPX/webgl/constants.ts:1712](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1712)*

**`constant`** {number}

___

###  GL_READ_FRAMEBUFFER

Ƭ **GL_READ_FRAMEBUFFER**: *36008*

*Defined in [src/js/GPX/webgl/constants.ts:2738](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2738)*

**`constant`** {number}

___

###  GL_READ_FRAMEBUFFER_BINDING

Ƭ **GL_READ_FRAMEBUFFER_BINDING**: *36010*

*Defined in [src/js/GPX/webgl/constants.ts:2748](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2748)*

**`constant`** {number}

___

###  GL_RED

Ƭ **GL_RED**: *6403*

*Defined in [src/js/GPX/webgl/constants.ts:1850](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1850)*

**`constant`** {number}

___

###  GL_RED_BITS

Ƭ **GL_RED_BITS**: *3410*

*Defined in [src/js/GPX/webgl/constants.ts:444](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L444)*

**`constant`** {number}

___

###  GL_RED_INTEGER

Ƭ **GL_RED_INTEGER**: *36244*

*Defined in [src/js/GPX/webgl/constants.ts:2030](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2030)*

**`constant`** {number}

___

###  GL_RENDERBUFFER

Ƭ **GL_RENDERBUFFER**: *36161*

*Defined in [src/js/GPX/webgl/constants.ts:1513](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1513)*

**`constant`** {number}

___

###  GL_RENDERBUFFER_ALPHA_SIZE

Ƭ **GL_RENDERBUFFER_ALPHA_SIZE**: *36179*

*Defined in [src/js/GPX/webgl/constants.ts:1583](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1583)*

**`constant`** {number}

___

###  GL_RENDERBUFFER_BINDING

Ƭ **GL_RENDERBUFFER_BINDING**: *36007*

*Defined in [src/js/GPX/webgl/constants.ts:1673](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1673)*

**`constant`** {number}

___

###  GL_RENDERBUFFER_BLUE_SIZE

Ƭ **GL_RENDERBUFFER_BLUE_SIZE**: *36178*

*Defined in [src/js/GPX/webgl/constants.ts:1578](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1578)*

**`constant`** {number}

___

###  GL_RENDERBUFFER_DEPTH_SIZE

Ƭ **GL_RENDERBUFFER_DEPTH_SIZE**: *36180*

*Defined in [src/js/GPX/webgl/constants.ts:1588](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1588)*

**`constant`** {number}

___

###  GL_RENDERBUFFER_GREEN_SIZE

Ƭ **GL_RENDERBUFFER_GREEN_SIZE**: *36177*

*Defined in [src/js/GPX/webgl/constants.ts:1573](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1573)*

**`constant`** {number}

___

###  GL_RENDERBUFFER_HEIGHT

Ƭ **GL_RENDERBUFFER_HEIGHT**: *36163*

*Defined in [src/js/GPX/webgl/constants.ts:1558](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1558)*

**`constant`** {number}

___

###  GL_RENDERBUFFER_INTERNAL_FORMAT

Ƭ **GL_RENDERBUFFER_INTERNAL_FORMAT**: *36164*

*Defined in [src/js/GPX/webgl/constants.ts:1563](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1563)*

**`constant`** {number}

___

###  GL_RENDERBUFFER_RED_SIZE

Ƭ **GL_RENDERBUFFER_RED_SIZE**: *36176*

*Defined in [src/js/GPX/webgl/constants.ts:1568](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1568)*

**`constant`** {number}

___

###  GL_RENDERBUFFER_SAMPLES

Ƭ **GL_RENDERBUFFER_SAMPLES**: *36011*

*Defined in [src/js/GPX/webgl/constants.ts:2753](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2753)*

**`constant`** {number}

___

###  GL_RENDERBUFFER_STENCIL_SIZE

Ƭ **GL_RENDERBUFFER_STENCIL_SIZE**: *36181*

*Defined in [src/js/GPX/webgl/constants.ts:1593](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1593)*

**`constant`** {number}

___

###  GL_RENDERBUFFER_WIDTH

Ƭ **GL_RENDERBUFFER_WIDTH**: *36162*

*Defined in [src/js/GPX/webgl/constants.ts:1553](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1553)*

**`constant`** {number}

___

###  GL_RENDERER

Ƭ **GL_RENDERER**: *7937*

*Defined in [src/js/GPX/webgl/constants.ts:519](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L519)*

**`constant`** {number}

___

###  GL_REPEAT

Ƭ **GL_REPEAT**: *10497*

*Defined in [src/js/GPX/webgl/constants.ts:1382](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1382)*

**`constant`** {number}

___

###  GL_REPLACE

Ƭ **GL_REPLACE**: *7681*

*Defined in [src/js/GPX/webgl/constants.ts:1046](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1046)*

**`constant`** {number}

___

###  GL_RG

Ƭ **GL_RG**: *33319*

*Defined in [src/js/GPX/webgl/constants.ts:2202](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2202)*

**`constant`** {number}

___

###  GL_RG16F

Ƭ **GL_RG16F**: *33327*

*Defined in [src/js/GPX/webgl/constants.ts:2065](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2065)*

**`constant`** {number}

___

###  GL_RG16I

Ƭ **GL_RG16I**: *33337*

*Defined in [src/js/GPX/webgl/constants.ts:2115](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2115)*

**`constant`** {number}

___

###  GL_RG16UI

Ƭ **GL_RG16UI**: *33338*

*Defined in [src/js/GPX/webgl/constants.ts:2120](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2120)*

**`constant`** {number}

___

###  GL_RG32F

Ƭ **GL_RG32F**: *33328*

*Defined in [src/js/GPX/webgl/constants.ts:2070](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2070)*

**`constant`** {number}

___

###  GL_RG32I

Ƭ **GL_RG32I**: *33339*

*Defined in [src/js/GPX/webgl/constants.ts:2125](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2125)*

**`constant`** {number}

___

###  GL_RG32UI

Ƭ **GL_RG32UI**: *33340*

*Defined in [src/js/GPX/webgl/constants.ts:2130](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2130)*

**`constant`** {number}

___

###  GL_RG8

Ƭ **GL_RG8**: *33323*

*Defined in [src/js/GPX/webgl/constants.ts:2050](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2050)*

**`constant`** {number}

___

###  GL_RG8I

Ƭ **GL_RG8I**: *33335*

*Defined in [src/js/GPX/webgl/constants.ts:2105](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2105)*

**`constant`** {number}

___

###  GL_RG8UI

Ƭ **GL_RG8UI**: *33336*

*Defined in [src/js/GPX/webgl/constants.ts:2110](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2110)*

**`constant`** {number}

___

###  GL_RG8_SNORM

Ƭ **GL_RG8_SNORM**: *36757*

*Defined in [src/js/GPX/webgl/constants.ts:2140](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2140)*

**`constant`** {number}

___

###  GL_RGB

Ƭ **GL_RGB**: *6407*

*Defined in [src/js/GPX/webgl/constants.ts:841](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L841)*

**`constant`** {number}

___

###  GL_RGB10_A2

Ƭ **GL_RGB10_A2**: *32857*

*Defined in [src/js/GPX/webgl/constants.ts:1865](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1865)*

**`constant`** {number}

___

###  GL_RGB10_A2UI

Ƭ **GL_RGB10_A2UI**: *36975*

*Defined in [src/js/GPX/webgl/constants.ts:2155](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2155)*

**`constant`** {number}

___

###  GL_RGB16F

Ƭ **GL_RGB16F**: *34843*

*Defined in [src/js/GPX/webgl/constants.ts:1945](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1945)*

**`constant`** {number}

___

###  GL_RGB16I

Ƭ **GL_RGB16I**: *36233*

*Defined in [src/js/GPX/webgl/constants.ts:2015](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2015)*

**`constant`** {number}

___

###  GL_RGB16UI

Ƭ **GL_RGB16UI**: *36215*

*Defined in [src/js/GPX/webgl/constants.ts:1985](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1985)*

**`constant`** {number}

___

###  GL_RGB32F

Ƭ **GL_RGB32F**: *34837*

*Defined in [src/js/GPX/webgl/constants.ts:1935](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1935)*

**`constant`** {number}

___

###  GL_RGB32F_EXT

Ƭ **GL_RGB32F_EXT**: *34837*

*Defined in [src/js/GPX/webgl/constants.ts:3457](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L3457)*

RGB 32-bit floating-point color-renderable format

**`constant`** {number}

___

###  GL_RGB32I

Ƭ **GL_RGB32I**: *36227*

*Defined in [src/js/GPX/webgl/constants.ts:2005](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2005)*

**`constant`** {number}

___

###  GL_RGB32UI

Ƭ **GL_RGB32UI**: *36209*

*Defined in [src/js/GPX/webgl/constants.ts:1975](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1975)*

**`constant`** {number}

___

###  GL_RGB565

Ƭ **GL_RGB565**: *36194*

*Defined in [src/js/GPX/webgl/constants.ts:1528](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1528)*

**`constant`** {number}

___

###  GL_RGB5_A1

Ƭ **GL_RGB5_A1**: *32855*

*Defined in [src/js/GPX/webgl/constants.ts:1523](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1523)*

**`constant`** {number}

___

###  GL_RGB8

Ƭ **GL_RGB8**: *32849*

*Defined in [src/js/GPX/webgl/constants.ts:1855](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1855)*

**`constant`** {number}

___

###  GL_RGB8I

Ƭ **GL_RGB8I**: *36239*

*Defined in [src/js/GPX/webgl/constants.ts:2025](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2025)*

**`constant`** {number}

___

###  GL_RGB8UI

Ƭ **GL_RGB8UI**: *36221*

*Defined in [src/js/GPX/webgl/constants.ts:1995](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1995)*

**`constant`** {number}

___

###  GL_RGB8_SNORM

Ƭ **GL_RGB8_SNORM**: *36758*

*Defined in [src/js/GPX/webgl/constants.ts:2145](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2145)*

**`constant`** {number}

___

###  GL_RGB9_E5

Ƭ **GL_RGB9_E5**: *35901*

*Defined in [src/js/GPX/webgl/constants.ts:1965](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1965)*

**`constant`** {number}

___

###  GL_RGBA

Ƭ **GL_RGBA**: *6408*

*Defined in [src/js/GPX/webgl/constants.ts:846](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L846)*

**`constant`** {number}

___

###  GL_RGBA16F

Ƭ **GL_RGBA16F**: *34842*

*Defined in [src/js/GPX/webgl/constants.ts:1940](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1940)*

**`constant`** {number}

___

###  GL_RGBA16I

Ƭ **GL_RGBA16I**: *36232*

*Defined in [src/js/GPX/webgl/constants.ts:2010](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2010)*

**`constant`** {number}

___

###  GL_RGBA16UI

Ƭ **GL_RGBA16UI**: *36214*

*Defined in [src/js/GPX/webgl/constants.ts:1980](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1980)*

**`constant`** {number}

___

###  GL_RGBA32F

Ƭ **GL_RGBA32F**: *34836*

*Defined in [src/js/GPX/webgl/constants.ts:1930](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1930)*

**`constant`** {number}

___

###  GL_RGBA32F_EXT

Ƭ **GL_RGBA32F_EXT**: *34836*

*Defined in [src/js/GPX/webgl/constants.ts:3451](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L3451)*

RGBA 32-bit floating-point color-renderable format

**`constant`** {number}

___

###  GL_RGBA32I

Ƭ **GL_RGBA32I**: *36226*

*Defined in [src/js/GPX/webgl/constants.ts:2000](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2000)*

**`constant`** {number}

___

###  GL_RGBA32UI

Ƭ **GL_RGBA32UI**: *36208*

*Defined in [src/js/GPX/webgl/constants.ts:1970](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1970)*

**`constant`** {number}

___

###  GL_RGBA4

Ƭ **GL_RGBA4**: *32854*

*Defined in [src/js/GPX/webgl/constants.ts:1518](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1518)*

**`constant`** {number}

___

###  GL_RGBA8

Ƭ **GL_RGBA8**: *32856*

*Defined in [src/js/GPX/webgl/constants.ts:1860](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1860)*

**`constant`** {number}

___

###  GL_RGBA8I

Ƭ **GL_RGBA8I**: *36238*

*Defined in [src/js/GPX/webgl/constants.ts:2020](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2020)*

**`constant`** {number}

___

###  GL_RGBA8UI

Ƭ **GL_RGBA8UI**: *36220*

*Defined in [src/js/GPX/webgl/constants.ts:1990](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1990)*

**`constant`** {number}

___

###  GL_RGBA8_SNORM

Ƭ **GL_RGBA8_SNORM**: *36759*

*Defined in [src/js/GPX/webgl/constants.ts:2150](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2150)*

**`constant`** {number}

___

###  GL_RGBA_INTEGER

Ƭ **GL_RGBA_INTEGER**: *36249*

*Defined in [src/js/GPX/webgl/constants.ts:2040](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2040)*

**`constant`** {number}

___

###  GL_RGB_INTEGER

Ƭ **GL_RGB_INTEGER**: *36248*

*Defined in [src/js/GPX/webgl/constants.ts:2035](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2035)*

**`constant`** {number}

___

###  GL_RG_INTEGER

Ƭ **GL_RG_INTEGER**: *33320*

*Defined in [src/js/GPX/webgl/constants.ts:2207](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2207)*

**`constant`** {number}

___

###  GL_SAMPLER_2D

Ƭ **GL_SAMPLER_2D**: *35678*

*Defined in [src/js/GPX/webgl/constants.ts:1464](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1464)*

**`constant`** {number}

___

###  GL_SAMPLER_2D_ARRAY

Ƭ **GL_SAMPLER_2D_ARRAY**: *36289*

*Defined in [src/js/GPX/webgl/constants.ts:2423](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2423)*

**`constant`** {number}

___

###  GL_SAMPLER_2D_ARRAY_SHADOW

Ƭ **GL_SAMPLER_2D_ARRAY_SHADOW**: *36292*

*Defined in [src/js/GPX/webgl/constants.ts:2428](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2428)*

**`constant`** {number}

___

###  GL_SAMPLER_2D_SHADOW

Ƭ **GL_SAMPLER_2D_SHADOW**: *35682*

*Defined in [src/js/GPX/webgl/constants.ts:2418](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2418)*

**`constant`** {number}

___

###  GL_SAMPLER_3D

Ƭ **GL_SAMPLER_3D**: *35679*

*Defined in [src/js/GPX/webgl/constants.ts:2413](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2413)*

**`constant`** {number}

___

###  GL_SAMPLER_BINDING

Ƭ **GL_SAMPLER_BINDING**: *35097*

*Defined in [src/js/GPX/webgl/constants.ts:2483](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2483)*

**`constant`** {number}

___

###  GL_SAMPLER_CUBE

Ƭ **GL_SAMPLER_CUBE**: *35680*

*Defined in [src/js/GPX/webgl/constants.ts:1469](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1469)*

**`constant`** {number}

___

###  GL_SAMPLER_CUBE_SHADOW

Ƭ **GL_SAMPLER_CUBE_SHADOW**: *36293*

*Defined in [src/js/GPX/webgl/constants.ts:2433](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2433)*

**`constant`** {number}

___

###  GL_SAMPLES

Ƭ **GL_SAMPLES**: *32937*

*Defined in [src/js/GPX/webgl/constants.ts:494](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L494)*

**`constant`** {number}

___

###  GL_SAMPLE_ALPHA_TO_COVERAGE

Ƭ **GL_SAMPLE_ALPHA_TO_COVERAGE**: *32926*

*Defined in [src/js/GPX/webgl/constants.ts:688](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L688)*

Passed to enable/disable to turn on/off the alpha to coverage. Used in multi-sampling alpha channels

**`constant`** {number}

___

###  GL_SAMPLE_BUFFERS

Ƭ **GL_SAMPLE_BUFFERS**: *32936*

*Defined in [src/js/GPX/webgl/constants.ts:489](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L489)*

**`constant`** {number}

___

###  GL_SAMPLE_COVERAGE

Ƭ **GL_SAMPLE_COVERAGE**: *32928*

*Defined in [src/js/GPX/webgl/constants.ts:694](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L694)*

Passed to enable/disable to turn on/off the sample coverage. Used in multi-sampling

**`constant`** {number}

___

###  GL_SAMPLE_COVERAGE_INVERT

Ƭ **GL_SAMPLE_COVERAGE_INVERT**: *32939*

*Defined in [src/js/GPX/webgl/constants.ts:504](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L504)*

**`constant`** {number}

___

###  GL_SAMPLE_COVERAGE_VALUE

Ƭ **GL_SAMPLE_COVERAGE_VALUE**: *32938*

*Defined in [src/js/GPX/webgl/constants.ts:499](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L499)*

**`constant`** {number}

___

###  GL_SCISSOR_BOX

Ƭ **GL_SCISSOR_BOX**: *3088*

*Defined in [src/js/GPX/webgl/constants.ts:404](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L404)*

Returns an Int32Array with four elements for the current scissor box dimensions

**`constant`** {number}

___

###  GL_SCISSOR_TEST

Ƭ **GL_SCISSOR_TEST**: *3089*

*Defined in [src/js/GPX/webgl/constants.ts:700](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L700)*

Passed to enable/disable to turn on/off the scissor test. Can also be used with getParameter to query the scissor test

**`constant`** {number}

___

###  GL_SEPARATE_ATTRIBS

Ƭ **GL_SEPARATE_ATTRIBS**: *35981*

*Defined in [src/js/GPX/webgl/constants.ts:2646](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2646)*

**`constant`** {number}

___

###  GL_SHADER_TYPE

Ƭ **GL_SHADER_TYPE**: *35663*

*Defined in [src/js/GPX/webgl/constants.ts:972](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L972)*

**`constant`** {number}

___

###  GL_SHADING_LANGUAGE_VERSION

Ƭ **GL_SHADING_LANGUAGE_VERSION**: *35724*

*Defined in [src/js/GPX/webgl/constants.ts:977](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L977)*

**`constant`** {number}

___

###  GL_SHORT

Ƭ **GL_SHORT**: *5122*

*Defined in [src/js/GPX/webgl/constants.ts:804](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L804)*

**`constant`** {number}

___

###  GL_SIGNALED

Ƭ **GL_SIGNALED**: *37145*

*Defined in [src/js/GPX/webgl/constants.ts:2937](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2937)*

**`constant`** {number}

___

###  GL_SIGNED_NORMALIZED

Ƭ **GL_SIGNED_NORMALIZED**: *36764*

*Defined in [src/js/GPX/webgl/constants.ts:2582](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2582)*

**`constant`** {number}

___

###  GL_SRC_ALPHA

Ƭ **GL_SRC_ALPHA**: *770*

*Defined in [src/js/GPX/webgl/constants.ts:113](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L113)*

Passed to blendFunc or blendFuncSeparate to multiply a component by the source's alpha

**`constant`** {number}

___

###  GL_SRC_ALPHA_SATURATE

Ƭ **GL_SRC_ALPHA_SATURATE**: *776*

*Defined in [src/js/GPX/webgl/constants.ts:149](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L149)*

Passed to blendFunc or blendFuncSeparate to multiply a component by the minimum of source's alpha or one minus the destination's alpha

**`constant`** {number}

___

###  GL_SRC_COLOR

Ƭ **GL_SRC_COLOR**: *768*

*Defined in [src/js/GPX/webgl/constants.ts:101](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L101)*

Passed to blendFunc or blendFuncSeparate to multiply a component by the source elements color

**`constant`** {number}

___

###  GL_SRGB

Ƭ **GL_SRGB**: *35904*

*Defined in [src/js/GPX/webgl/constants.ts:1910](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1910)*

**`constant`** {number}

___

###  GL_SRGB8

Ƭ **GL_SRGB8**: *35905*

*Defined in [src/js/GPX/webgl/constants.ts:1915](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1915)*

**`constant`** {number}

___

###  GL_SRGB8_ALPHA8

Ƭ **GL_SRGB8_ALPHA8**: *35907*

*Defined in [src/js/GPX/webgl/constants.ts:1920](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1920)*

**`constant`** {number}

___

###  GL_SRGB8_ALPHA8_EXT

Ƭ **GL_SRGB8_ALPHA8_EXT**: *35907*

*Defined in [src/js/GPX/webgl/constants.ts:3501](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L3501)*

Sized (8-bit) sRGB and alpha formats

**`constant`** {number}

___

###  GL_SRGB_ALPHA_EXT

Ƭ **GL_SRGB_ALPHA_EXT**: *35906*

*Defined in [src/js/GPX/webgl/constants.ts:3495](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L3495)*

Unsized sRGB format with unsized alpha component

**`constant`** {number}

___

###  GL_SRGB_EXT

Ƭ **GL_SRGB_EXT**: *35904*

*Defined in [src/js/GPX/webgl/constants.ts:3489](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L3489)*

Unsized sRGB format that leaves the precision up to the driver

**`constant`** {number}

___

###  GL_STATIC_COPY

Ƭ **GL_STATIC_COPY**: *35046*

*Defined in [src/js/GPX/webgl/constants.ts:3014](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L3014)*

**`constant`** {number}

___

###  GL_STATIC_DRAW

Ƭ **GL_STATIC_DRAW**: *35044*

*Defined in [src/js/GPX/webgl/constants.ts:548](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L548)*

Passed to bufferData as a hint about whether the contents of the buffer are likely to be used often and not change often

**`constant`** {number}

___

###  GL_STATIC_READ

Ƭ **GL_STATIC_READ**: *35045*

*Defined in [src/js/GPX/webgl/constants.ts:3009](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L3009)*

**`constant`** {number}

___

###  GL_STENCIL

Ƭ **GL_STENCIL**: *6146*

*Defined in [src/js/GPX/webgl/constants.ts:2979](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2979)*

**`constant`** {number}

___

###  GL_STENCIL_ATTACHMENT

Ƭ **GL_STENCIL_ATTACHMENT**: *36128*

*Defined in [src/js/GPX/webgl/constants.ts:1628](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1628)*

**`constant`** {number}

___

###  GL_STENCIL_BACK_FAIL

Ƭ **GL_STENCIL_BACK_FAIL**: *34817*

*Defined in [src/js/GPX/webgl/constants.ts:367](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L367)*

**`constant`** {number}

___

###  GL_STENCIL_BACK_FUNC

Ƭ **GL_STENCIL_BACK_FUNC**: *34816*

*Defined in [src/js/GPX/webgl/constants.ts:362](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L362)*

**`constant`** {number}

___

###  GL_STENCIL_BACK_PASS_DEPTH_FAIL

Ƭ **GL_STENCIL_BACK_PASS_DEPTH_FAIL**: *34818*

*Defined in [src/js/GPX/webgl/constants.ts:372](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L372)*

**`constant`** {number}

___

###  GL_STENCIL_BACK_PASS_DEPTH_PASS

Ƭ **GL_STENCIL_BACK_PASS_DEPTH_PASS**: *34819*

*Defined in [src/js/GPX/webgl/constants.ts:377](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L377)*

**`constant`** {number}

___

###  GL_STENCIL_BACK_REF

Ƭ **GL_STENCIL_BACK_REF**: *36003*

*Defined in [src/js/GPX/webgl/constants.ts:382](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L382)*

**`constant`** {number}

___

###  GL_STENCIL_BACK_VALUE_MASK

Ƭ **GL_STENCIL_BACK_VALUE_MASK**: *36004*

*Defined in [src/js/GPX/webgl/constants.ts:387](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L387)*

**`constant`** {number}

___

###  GL_STENCIL_BACK_WRITEMASK

Ƭ **GL_STENCIL_BACK_WRITEMASK**: *36005*

*Defined in [src/js/GPX/webgl/constants.ts:392](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L392)*

**`constant`** {number}

___

###  GL_STENCIL_BITS

Ƭ **GL_STENCIL_BITS**: *3415*

*Defined in [src/js/GPX/webgl/constants.ts:469](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L469)*

**`constant`** {number}

___

###  GL_STENCIL_BUFFER_BIT

Ƭ **GL_STENCIL_BUFFER_BIT**: *1024*

*Defined in [src/js/GPX/webgl/constants.ts:29](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L29)*

Passed to clear to clear the current stencil buffer

**`constant`** {number}

___

###  GL_STENCIL_CLEAR_VALUE

Ƭ **GL_STENCIL_CLEAR_VALUE**: *2961*

*Defined in [src/js/GPX/webgl/constants.ts:317](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L317)*

Passed to getParameter to get the value the stencil will be cleared to

**`constant`** {number}

___

###  GL_STENCIL_FAIL

Ƭ **GL_STENCIL_FAIL**: *2964*

*Defined in [src/js/GPX/webgl/constants.ts:329](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L329)*

Passed to getParameter to get the current stencil fail function. Should return KEEP, REPLACE, INCR, DECR, INVERT, INCR_WRAP, or DECR_WRAP

**`constant`** {number}

___

###  GL_STENCIL_FUNC

Ƭ **GL_STENCIL_FUNC**: *2962*

*Defined in [src/js/GPX/webgl/constants.ts:323](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L323)*

Passed to getParameter to get the current stencil function. Returns NEVER, ALWAYS, LESS, EQUAL, LEQUAL, GREATER, GEQUAL, or NOTEQUAL

**`constant`** {number}

___

###  GL_STENCIL_INDEX

Ƭ **GL_STENCIL_INDEX**: *6401*

*Defined in [src/js/GPX/webgl/constants.ts:1538](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1538)*

**`constant`** {number}

___

###  GL_STENCIL_INDEX8

Ƭ **GL_STENCIL_INDEX8**: *36168*

*Defined in [src/js/GPX/webgl/constants.ts:1543](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1543)*

**`constant`** {number}

___

###  GL_STENCIL_PASS_DEPTH_FAIL

Ƭ **GL_STENCIL_PASS_DEPTH_FAIL**: *2965*

*Defined in [src/js/GPX/webgl/constants.ts:335](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L335)*

Passed to getParameter to get the current stencil fail function should the depth buffer test fail. Should return KEEP, REPLACE, INCR, DECR, INVERT, INCR_WRAP, or DECR_WRAP

**`constant`** {number}

___

###  GL_STENCIL_PASS_DEPTH_PASS

Ƭ **GL_STENCIL_PASS_DEPTH_PASS**: *2966*

*Defined in [src/js/GPX/webgl/constants.ts:341](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L341)*

Passed to getParameter to get the current stencil fail function should the depth buffer test pass. Should return KEEP, REPLACE, INCR, DECR, INVERT, INCR_WRAP, or DECR_WRAP

**`constant`** {number}

___

###  GL_STENCIL_REF

Ƭ **GL_STENCIL_REF**: *2967*

*Defined in [src/js/GPX/webgl/constants.ts:347](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L347)*

Passed to getParameter to get the reference value used for stencil tests

**`constant`** {number}

___

###  GL_STENCIL_TEST

Ƭ **GL_STENCIL_TEST**: *2960*

*Defined in [src/js/GPX/webgl/constants.ts:706](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L706)*

Passed to enable/disable to turn on/off the stencil test. Can also be used with getParameter to query the stencil test

**`constant`** {number}

___

###  GL_STENCIL_VALUE_MASK

Ƭ **GL_STENCIL_VALUE_MASK**: *2963*

*Defined in [src/js/GPX/webgl/constants.ts:352](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L352)*

**`constant`** {number}

___

###  GL_STENCIL_WRITEMASK

Ƭ **GL_STENCIL_WRITEMASK**: *2968*

*Defined in [src/js/GPX/webgl/constants.ts:357](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L357)*

**`constant`** {number}

___

###  GL_STREAM_COPY

Ƭ **GL_STREAM_COPY**: *35042*

*Defined in [src/js/GPX/webgl/constants.ts:3004](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L3004)*

**`constant`** {number}

___

###  GL_STREAM_DRAW

Ƭ **GL_STREAM_DRAW**: *35040*

*Defined in [src/js/GPX/webgl/constants.ts:554](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L554)*

Passed to bufferData as a hint about whether the contents of the buffer are likely to not be used often

**`constant`** {number}

___

###  GL_STREAM_READ

Ƭ **GL_STREAM_READ**: *35041*

*Defined in [src/js/GPX/webgl/constants.ts:2999](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2999)*

**`constant`** {number}

___

###  GL_SUBPIXEL_BITS

Ƭ **GL_SUBPIXEL_BITS**: *3408*

*Defined in [src/js/GPX/webgl/constants.ts:439](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L439)*

**`constant`** {number}

___

###  GL_SYNC_CONDITION

Ƭ **GL_SYNC_CONDITION**: *37139*

*Defined in [src/js/GPX/webgl/constants.ts:2907](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2907)*

**`constant`** {number}

___

###  GL_SYNC_FENCE

Ƭ **GL_SYNC_FENCE**: *37142*

*Defined in [src/js/GPX/webgl/constants.ts:2922](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2922)*

**`constant`** {number}

___

###  GL_SYNC_FLAGS

Ƭ **GL_SYNC_FLAGS**: *37141*

*Defined in [src/js/GPX/webgl/constants.ts:2917](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2917)*

**`constant`** {number}

___

###  GL_SYNC_FLUSH_COMMANDS_BIT

Ƭ **GL_SYNC_FLUSH_COMMANDS_BIT**: *1*

*Defined in [src/js/GPX/webgl/constants.ts:2962](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2962)*

**`constant`** {number}

___

###  GL_SYNC_GPU_COMMANDS_COMPLETE

Ƭ **GL_SYNC_GPU_COMMANDS_COMPLETE**: *37143*

*Defined in [src/js/GPX/webgl/constants.ts:2927](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2927)*

**`constant`** {number}

___

###  GL_SYNC_STATUS

Ƭ **GL_SYNC_STATUS**: *37140*

*Defined in [src/js/GPX/webgl/constants.ts:2912](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2912)*

**`constant`** {number}

___

###  GL_TEXTURE

Ƭ **GL_TEXTURE**: *5890*

*Defined in [src/js/GPX/webgl/constants.ts:1134](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1134)*

**`constant`** {number}

___

###  GL_TEXTURE0

Ƭ **GL_TEXTURE0**: *33984*

*Defined in [src/js/GPX/webgl/constants.ts:1185](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1185)*

A texture unit

**`constant`** {number}

___

###  GL_TEXTURE1

Ƭ **GL_TEXTURE1**: *33985*

*Defined in [src/js/GPX/webgl/constants.ts:1191](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1191)*

A texture unit

**`constant`** {number}

___

###  GL_TEXTURE10

Ƭ **GL_TEXTURE10**: *33994*

*Defined in [src/js/GPX/webgl/constants.ts:1245](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1245)*

A texture unit

**`constant`** {number}

___

###  GL_TEXTURE11

Ƭ **GL_TEXTURE11**: *33995*

*Defined in [src/js/GPX/webgl/constants.ts:1251](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1251)*

A texture unit

**`constant`** {number}

___

###  GL_TEXTURE12

Ƭ **GL_TEXTURE12**: *33996*

*Defined in [src/js/GPX/webgl/constants.ts:1257](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1257)*

A texture unit

**`constant`** {number}

___

###  GL_TEXTURE13

Ƭ **GL_TEXTURE13**: *33997*

*Defined in [src/js/GPX/webgl/constants.ts:1263](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1263)*

A texture unit

**`constant`** {number}

___

###  GL_TEXTURE14

Ƭ **GL_TEXTURE14**: *33998*

*Defined in [src/js/GPX/webgl/constants.ts:1269](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1269)*

A texture unit

**`constant`** {number}

___

###  GL_TEXTURE15

Ƭ **GL_TEXTURE15**: *33999*

*Defined in [src/js/GPX/webgl/constants.ts:1275](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1275)*

A texture unit

**`constant`** {number}

___

###  GL_TEXTURE16

Ƭ **GL_TEXTURE16**: *34000*

*Defined in [src/js/GPX/webgl/constants.ts:1281](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1281)*

A texture unit

**`constant`** {number}

___

###  GL_TEXTURE17

Ƭ **GL_TEXTURE17**: *34001*

*Defined in [src/js/GPX/webgl/constants.ts:1287](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1287)*

A texture unit

**`constant`** {number}

___

###  GL_TEXTURE18

Ƭ **GL_TEXTURE18**: *34002*

*Defined in [src/js/GPX/webgl/constants.ts:1293](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1293)*

A texture unit

**`constant`** {number}

___

###  GL_TEXTURE19

Ƭ **GL_TEXTURE19**: *34003*

*Defined in [src/js/GPX/webgl/constants.ts:1299](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1299)*

A texture unit

**`constant`** {number}

___

###  GL_TEXTURE2

Ƭ **GL_TEXTURE2**: *33986*

*Defined in [src/js/GPX/webgl/constants.ts:1197](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1197)*

A texture unit

**`constant`** {number}

___

###  GL_TEXTURE20

Ƭ **GL_TEXTURE20**: *34004*

*Defined in [src/js/GPX/webgl/constants.ts:1305](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1305)*

A texture unit

**`constant`** {number}

___

###  GL_TEXTURE21

Ƭ **GL_TEXTURE21**: *34005*

*Defined in [src/js/GPX/webgl/constants.ts:1311](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1311)*

A texture unit

**`constant`** {number}

___

###  GL_TEXTURE22

Ƭ **GL_TEXTURE22**: *34006*

*Defined in [src/js/GPX/webgl/constants.ts:1317](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1317)*

A texture unit

**`constant`** {number}

___

###  GL_TEXTURE23

Ƭ **GL_TEXTURE23**: *34007*

*Defined in [src/js/GPX/webgl/constants.ts:1323](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1323)*

A texture unit

**`constant`** {number}

___

###  GL_TEXTURE24

Ƭ **GL_TEXTURE24**: *34008*

*Defined in [src/js/GPX/webgl/constants.ts:1329](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1329)*

A texture unit

**`constant`** {number}

___

###  GL_TEXTURE25

Ƭ **GL_TEXTURE25**: *34009*

*Defined in [src/js/GPX/webgl/constants.ts:1335](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1335)*

A texture unit

**`constant`** {number}

___

###  GL_TEXTURE26

Ƭ **GL_TEXTURE26**: *34010*

*Defined in [src/js/GPX/webgl/constants.ts:1341](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1341)*

A texture unit

**`constant`** {number}

___

###  GL_TEXTURE27

Ƭ **GL_TEXTURE27**: *34011*

*Defined in [src/js/GPX/webgl/constants.ts:1347](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1347)*

A texture unit

**`constant`** {number}

___

###  GL_TEXTURE28

Ƭ **GL_TEXTURE28**: *34012*

*Defined in [src/js/GPX/webgl/constants.ts:1353](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1353)*

A texture unit

**`constant`** {number}

___

###  GL_TEXTURE29

Ƭ **GL_TEXTURE29**: *34013*

*Defined in [src/js/GPX/webgl/constants.ts:1359](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1359)*

A texture unit

**`constant`** {number}

___

###  GL_TEXTURE3

Ƭ **GL_TEXTURE3**: *33987*

*Defined in [src/js/GPX/webgl/constants.ts:1203](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1203)*

A texture unit

**`constant`** {number}

___

###  GL_TEXTURE30

Ƭ **GL_TEXTURE30**: *34014*

*Defined in [src/js/GPX/webgl/constants.ts:1365](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1365)*

A texture unit

**`constant`** {number}

___

###  GL_TEXTURE31

Ƭ **GL_TEXTURE31**: *34015*

*Defined in [src/js/GPX/webgl/constants.ts:1371](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1371)*

A texture unit

**`constant`** {number}

___

###  GL_TEXTURE4

Ƭ **GL_TEXTURE4**: *33988*

*Defined in [src/js/GPX/webgl/constants.ts:1209](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1209)*

A texture unit

**`constant`** {number}

___

###  GL_TEXTURE5

Ƭ **GL_TEXTURE5**: *33989*

*Defined in [src/js/GPX/webgl/constants.ts:1215](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1215)*

A texture unit

**`constant`** {number}

___

###  GL_TEXTURE6

Ƭ **GL_TEXTURE6**: *33990*

*Defined in [src/js/GPX/webgl/constants.ts:1221](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1221)*

A texture unit

**`constant`** {number}

___

###  GL_TEXTURE7

Ƭ **GL_TEXTURE7**: *33991*

*Defined in [src/js/GPX/webgl/constants.ts:1227](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1227)*

A texture unit

**`constant`** {number}

___

###  GL_TEXTURE8

Ƭ **GL_TEXTURE8**: *33992*

*Defined in [src/js/GPX/webgl/constants.ts:1233](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1233)*

A texture unit

**`constant`** {number}

___

###  GL_TEXTURE9

Ƭ **GL_TEXTURE9**: *33993*

*Defined in [src/js/GPX/webgl/constants.ts:1239](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1239)*

A texture unit

**`constant`** {number}

___

###  GL_TEXTURE_2D

Ƭ **GL_TEXTURE_2D**: *3553*

*Defined in [src/js/GPX/webgl/constants.ts:1129](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1129)*

**`constant`** {number}

___

###  GL_TEXTURE_2D_ARRAY

Ƭ **GL_TEXTURE_2D_ARRAY**: *35866*

*Defined in [src/js/GPX/webgl/constants.ts:1950](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1950)*

**`constant`** {number}

___

###  GL_TEXTURE_3D

Ƭ **GL_TEXTURE_3D**: *32879*

*Defined in [src/js/GPX/webgl/constants.ts:1870](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1870)*

**`constant`** {number}

___

###  GL_TEXTURE_BASE_LEVEL

Ƭ **GL_TEXTURE_BASE_LEVEL**: *33084*

*Defined in [src/js/GPX/webgl/constants.ts:1890](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1890)*

**`constant`** {number}

___

###  GL_TEXTURE_BINDING_2D

Ƭ **GL_TEXTURE_BINDING_2D**: *32873*

*Defined in [src/js/GPX/webgl/constants.ts:484](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L484)*

**`constant`** {number}

___

###  GL_TEXTURE_BINDING_2D_ARRAY

Ƭ **GL_TEXTURE_BINDING_2D_ARRAY**: *35869*

*Defined in [src/js/GPX/webgl/constants.ts:1955](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1955)*

**`constant`** {number}

___

###  GL_TEXTURE_BINDING_3D

Ƭ **GL_TEXTURE_BINDING_3D**: *32874*

*Defined in [src/js/GPX/webgl/constants.ts:1747](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1747)*

**`constant`** {number}

___

###  GL_TEXTURE_BINDING_CUBE_MAP

Ƭ **GL_TEXTURE_BINDING_CUBE_MAP**: *34068*

*Defined in [src/js/GPX/webgl/constants.ts:1144](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1144)*

**`constant`** {number}

___

###  GL_TEXTURE_COMPARE_FUNC

Ƭ **GL_TEXTURE_COMPARE_FUNC**: *34893*

*Defined in [src/js/GPX/webgl/constants.ts:1905](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1905)*

**`constant`** {number}

___

###  GL_TEXTURE_COMPARE_MODE

Ƭ **GL_TEXTURE_COMPARE_MODE**: *34892*

*Defined in [src/js/GPX/webgl/constants.ts:1900](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1900)*

**`constant`** {number}

___

###  GL_TEXTURE_CUBE_MAP

Ƭ **GL_TEXTURE_CUBE_MAP**: *34067*

*Defined in [src/js/GPX/webgl/constants.ts:1139](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1139)*

**`constant`** {number}

___

###  GL_TEXTURE_CUBE_MAP_NEGATIVE_X

Ƭ **GL_TEXTURE_CUBE_MAP_NEGATIVE_X**: *34070*

*Defined in [src/js/GPX/webgl/constants.ts:1154](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1154)*

**`constant`** {number}

___

###  GL_TEXTURE_CUBE_MAP_NEGATIVE_Y

Ƭ **GL_TEXTURE_CUBE_MAP_NEGATIVE_Y**: *34072*

*Defined in [src/js/GPX/webgl/constants.ts:1164](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1164)*

**`constant`** {number}

___

###  GL_TEXTURE_CUBE_MAP_NEGATIVE_Z

Ƭ **GL_TEXTURE_CUBE_MAP_NEGATIVE_Z**: *34074*

*Defined in [src/js/GPX/webgl/constants.ts:1174](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1174)*

**`constant`** {number}

___

###  GL_TEXTURE_CUBE_MAP_POSITIVE_X

Ƭ **GL_TEXTURE_CUBE_MAP_POSITIVE_X**: *34069*

*Defined in [src/js/GPX/webgl/constants.ts:1149](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1149)*

**`constant`** {number}

___

###  GL_TEXTURE_CUBE_MAP_POSITIVE_Y

Ƭ **GL_TEXTURE_CUBE_MAP_POSITIVE_Y**: *34071*

*Defined in [src/js/GPX/webgl/constants.ts:1159](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1159)*

**`constant`** {number}

___

###  GL_TEXTURE_CUBE_MAP_POSITIVE_Z

Ƭ **GL_TEXTURE_CUBE_MAP_POSITIVE_Z**: *34073*

*Defined in [src/js/GPX/webgl/constants.ts:1169](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1169)*

**`constant`** {number}

___

###  GL_TEXTURE_IMMUTABLE_FORMAT

Ƭ **GL_TEXTURE_IMMUTABLE_FORMAT**: *37167*

*Defined in [src/js/GPX/webgl/constants.ts:2160](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2160)*

**`constant`** {number}

___

###  GL_TEXTURE_IMMUTABLE_LEVELS

Ƭ **GL_TEXTURE_IMMUTABLE_LEVELS**: *33503*

*Defined in [src/js/GPX/webgl/constants.ts:2165](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2165)*

**`constant`** {number}

___

###  GL_TEXTURE_MAG_FILTER

Ƭ **GL_TEXTURE_MAG_FILTER**: *10240*

*Defined in [src/js/GPX/webgl/constants.ts:1109](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1109)*

**`constant`** {number}

___

###  GL_TEXTURE_MAX_ANISOTROPY_EXT

Ƭ **GL_TEXTURE_MAX_ANISOTROPY_EXT**: *34046*

*Defined in [src/js/GPX/webgl/constants.ts:3087](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L3087)*

Passed to texParameter to set the desired maximum anisotropy for a texture

**`constant`** {number}

___

###  GL_TEXTURE_MAX_LEVEL

Ƭ **GL_TEXTURE_MAX_LEVEL**: *33085*

*Defined in [src/js/GPX/webgl/constants.ts:1895](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1895)*

**`constant`** {number}

___

###  GL_TEXTURE_MAX_LOD

Ƭ **GL_TEXTURE_MAX_LOD**: *33083*

*Defined in [src/js/GPX/webgl/constants.ts:1885](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1885)*

**`constant`** {number}

___

###  GL_TEXTURE_MIN_FILTER

Ƭ **GL_TEXTURE_MIN_FILTER**: *10241*

*Defined in [src/js/GPX/webgl/constants.ts:1114](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1114)*

**`constant`** {number}

___

###  GL_TEXTURE_MIN_LOD

Ƭ **GL_TEXTURE_MIN_LOD**: *33082*

*Defined in [src/js/GPX/webgl/constants.ts:1880](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1880)*

**`constant`** {number}

___

###  GL_TEXTURE_WRAP_R

Ƭ **GL_TEXTURE_WRAP_R**: *32882*

*Defined in [src/js/GPX/webgl/constants.ts:1875](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1875)*

**`constant`** {number}

___

###  GL_TEXTURE_WRAP_S

Ƭ **GL_TEXTURE_WRAP_S**: *10242*

*Defined in [src/js/GPX/webgl/constants.ts:1119](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1119)*

**`constant`** {number}

___

###  GL_TEXTURE_WRAP_T

Ƭ **GL_TEXTURE_WRAP_T**: *10243*

*Defined in [src/js/GPX/webgl/constants.ts:1124](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1124)*

**`constant`** {number}

___

###  GL_TIMEOUT_EXPIRED

Ƭ **GL_TIMEOUT_EXPIRED**: *37147*

*Defined in [src/js/GPX/webgl/constants.ts:2947](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2947)*

**`constant`** {number}

___

###  GL_TIMEOUT_IGNORED

Ƭ **GL_TIMEOUT_IGNORED**: *-1*

*Defined in [src/js/GPX/webgl/constants.ts:3044](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L3044)*

**`constant`** {number}

___

###  GL_TIMESTAMP_EXT

Ƭ **GL_TIMESTAMP_EXT**: *36392*

*Defined in [src/js/GPX/webgl/constants.ts:3767](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L3767)*

The current time

**`constant`** {number}

___

###  GL_TIME_ELAPSED_EXT

Ƭ **GL_TIME_ELAPSED_EXT**: *35007*

*Defined in [src/js/GPX/webgl/constants.ts:3761](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L3761)*

Elapsed time (in nanoseconds)

**`constant`** {number}

___

###  GL_TRANSFORM_FEEDBACK

Ƭ **GL_TRANSFORM_FEEDBACK**: *36386*

*Defined in [src/js/GPX/webgl/constants.ts:2661](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2661)*

**`constant`** {number}

___

###  GL_TRANSFORM_FEEDBACK_ACTIVE

Ƭ **GL_TRANSFORM_FEEDBACK_ACTIVE**: *36388*

*Defined in [src/js/GPX/webgl/constants.ts:2671](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2671)*

**`constant`** {number}

___

###  GL_TRANSFORM_FEEDBACK_BINDING

Ƭ **GL_TRANSFORM_FEEDBACK_BINDING**: *36389*

*Defined in [src/js/GPX/webgl/constants.ts:2676](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2676)*

**`constant`** {number}

___

###  GL_TRANSFORM_FEEDBACK_BUFFER

Ƭ **GL_TRANSFORM_FEEDBACK_BUFFER**: *35982*

*Defined in [src/js/GPX/webgl/constants.ts:2651](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2651)*

**`constant`** {number}

___

###  GL_TRANSFORM_FEEDBACK_BUFFER_BINDING

Ƭ **GL_TRANSFORM_FEEDBACK_BUFFER_BINDING**: *35983*

*Defined in [src/js/GPX/webgl/constants.ts:2656](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2656)*

**`constant`** {number}

___

###  GL_TRANSFORM_FEEDBACK_BUFFER_MODE

Ƭ **GL_TRANSFORM_FEEDBACK_BUFFER_MODE**: *35967*

*Defined in [src/js/GPX/webgl/constants.ts:2601](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2601)*

**`constant`** {number}

___

###  GL_TRANSFORM_FEEDBACK_BUFFER_SIZE

Ƭ **GL_TRANSFORM_FEEDBACK_BUFFER_SIZE**: *35973*

*Defined in [src/js/GPX/webgl/constants.ts:2621](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2621)*

**`constant`** {number}

___

###  GL_TRANSFORM_FEEDBACK_BUFFER_START

Ƭ **GL_TRANSFORM_FEEDBACK_BUFFER_START**: *35972*

*Defined in [src/js/GPX/webgl/constants.ts:2616](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2616)*

**`constant`** {number}

___

###  GL_TRANSFORM_FEEDBACK_PAUSED

Ƭ **GL_TRANSFORM_FEEDBACK_PAUSED**: *36387*

*Defined in [src/js/GPX/webgl/constants.ts:2666](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2666)*

**`constant`** {number}

___

###  GL_TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN

Ƭ **GL_TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN**: *35976*

*Defined in [src/js/GPX/webgl/constants.ts:2626](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2626)*

**`constant`** {number}

___

###  GL_TRANSFORM_FEEDBACK_VARYINGS

Ƭ **GL_TRANSFORM_FEEDBACK_VARYINGS**: *35971*

*Defined in [src/js/GPX/webgl/constants.ts:2611](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2611)*

**`constant`** {number}

___

###  GL_TRIANGLES

Ƭ **GL_TRIANGLES**: *4*

*Defined in [src/js/GPX/webgl/constants.ts:68](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L68)*

Passed to drawElements or drawArrays to draw triangles. Each set of three vertices creates a separate triangle

**`constant`** {number}

___

###  GL_TRIANGLE_FAN

Ƭ **GL_TRIANGLE_FAN**: *6*

*Defined in [src/js/GPX/webgl/constants.ts:80](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L80)*

Passed to drawElements or drawArrays to draw a connected group of triangles. Each vertex connects to the previous and the first vertex in the fan

**`constant`** {number}

___

###  GL_TRIANGLE_STRIP

Ƭ **GL_TRIANGLE_STRIP**: *5*

*Defined in [src/js/GPX/webgl/constants.ts:74](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L74)*

Passed to drawElements or drawArrays to draw a connected group of triangles

**`constant`** {number}

___

###  GL_UNIFORM_ARRAY_STRIDE

Ƭ **GL_UNIFORM_ARRAY_STRIDE**: *35388*

*Defined in [src/js/GPX/webgl/constants.ts:2855](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2855)*

**`constant`** {number}

___

###  GL_UNIFORM_BLOCK_ACTIVE_UNIFORMS

Ƭ **GL_UNIFORM_BLOCK_ACTIVE_UNIFORMS**: *35394*

*Defined in [src/js/GPX/webgl/constants.ts:2880](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2880)*

**`constant`** {number}

___

###  GL_UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES

Ƭ **GL_UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES**: *35395*

*Defined in [src/js/GPX/webgl/constants.ts:2885](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2885)*

**`constant`** {number}

___

###  GL_UNIFORM_BLOCK_BINDING

Ƭ **GL_UNIFORM_BLOCK_BINDING**: *35391*

*Defined in [src/js/GPX/webgl/constants.ts:2870](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2870)*

**`constant`** {number}

___

###  GL_UNIFORM_BLOCK_DATA_SIZE

Ƭ **GL_UNIFORM_BLOCK_DATA_SIZE**: *35392*

*Defined in [src/js/GPX/webgl/constants.ts:2875](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2875)*

**`constant`** {number}

___

###  GL_UNIFORM_BLOCK_INDEX

Ƭ **GL_UNIFORM_BLOCK_INDEX**: *35386*

*Defined in [src/js/GPX/webgl/constants.ts:2845](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2845)*

**`constant`** {number}

___

###  GL_UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER

Ƭ **GL_UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER**: *35398*

*Defined in [src/js/GPX/webgl/constants.ts:2895](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2895)*

**`constant`** {number}

___

###  GL_UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER

Ƭ **GL_UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER**: *35396*

*Defined in [src/js/GPX/webgl/constants.ts:2890](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2890)*

**`constant`** {number}

___

###  GL_UNIFORM_BUFFER

Ƭ **GL_UNIFORM_BUFFER**: *35345*

*Defined in [src/js/GPX/webgl/constants.ts:2770](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2770)*

**`constant`** {number}

___

###  GL_UNIFORM_BUFFER_BINDING

Ƭ **GL_UNIFORM_BUFFER_BINDING**: *35368*

*Defined in [src/js/GPX/webgl/constants.ts:2775](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2775)*

**`constant`** {number}

___

###  GL_UNIFORM_BUFFER_OFFSET_ALIGNMENT

Ƭ **GL_UNIFORM_BUFFER_OFFSET_ALIGNMENT**: *35380*

*Defined in [src/js/GPX/webgl/constants.ts:2825](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2825)*

**`constant`** {number}

___

###  GL_UNIFORM_BUFFER_SIZE

Ƭ **GL_UNIFORM_BUFFER_SIZE**: *35370*

*Defined in [src/js/GPX/webgl/constants.ts:2785](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2785)*

**`constant`** {number}

___

###  GL_UNIFORM_BUFFER_START

Ƭ **GL_UNIFORM_BUFFER_START**: *35369*

*Defined in [src/js/GPX/webgl/constants.ts:2780](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2780)*

**`constant`** {number}

___

###  GL_UNIFORM_IS_ROW_MAJOR

Ƭ **GL_UNIFORM_IS_ROW_MAJOR**: *35390*

*Defined in [src/js/GPX/webgl/constants.ts:2865](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2865)*

**`constant`** {number}

___

###  GL_UNIFORM_MATRIX_STRIDE

Ƭ **GL_UNIFORM_MATRIX_STRIDE**: *35389*

*Defined in [src/js/GPX/webgl/constants.ts:2860](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2860)*

**`constant`** {number}

___

###  GL_UNIFORM_OFFSET

Ƭ **GL_UNIFORM_OFFSET**: *35387*

*Defined in [src/js/GPX/webgl/constants.ts:2850](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2850)*

**`constant`** {number}

___

###  GL_UNIFORM_SIZE

Ƭ **GL_UNIFORM_SIZE**: *35384*

*Defined in [src/js/GPX/webgl/constants.ts:2840](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2840)*

**`constant`** {number}

___

###  GL_UNIFORM_TYPE

Ƭ **GL_UNIFORM_TYPE**: *35383*

*Defined in [src/js/GPX/webgl/constants.ts:2835](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2835)*

**`constant`** {number}

___

###  GL_UNMASKED_RENDERER_WEBGL

Ƭ **GL_UNMASKED_RENDERER_WEBGL**: *37446*

*Defined in [src/js/GPX/webgl/constants.ts:3073](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L3073)*

Passed to getParameter to get the renderer string of the graphics driver

**`constant`** {number}

___

###  GL_UNMASKED_VENDOR_WEBGL

Ƭ **GL_UNMASKED_VENDOR_WEBGL**: *37445*

*Defined in [src/js/GPX/webgl/constants.ts:3067](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L3067)*

Passed to getParameter to get the vendor string of the graphics driver

**`constant`** {number}

___

###  GL_UNPACK_ALIGNMENT

Ƭ **GL_UNPACK_ALIGNMENT**: *3317*

*Defined in [src/js/GPX/webgl/constants.ts:419](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L419)*

**`constant`** {number}

___

###  GL_UNPACK_COLORSPACE_CONVERSION_WEBGL

Ƭ **GL_UNPACK_COLORSPACE_CONVERSION_WEBGL**: *37443*

*Defined in [src/js/GPX/webgl/constants.ts:1701](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1701)*

**`constant`** {number}

___

###  GL_UNPACK_FLIP_Y_WEBGL

Ƭ **GL_UNPACK_FLIP_Y_WEBGL**: *37440*

*Defined in [src/js/GPX/webgl/constants.ts:1691](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1691)*

**`constant`** {number}

___

###  GL_UNPACK_IMAGE_HEIGHT

Ƭ **GL_UNPACK_IMAGE_HEIGHT**: *32878*

*Defined in [src/js/GPX/webgl/constants.ts:1757](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1757)*

**`constant`** {number}

___

###  GL_UNPACK_PREMULTIPLY_ALPHA_WEBGL

Ƭ **GL_UNPACK_PREMULTIPLY_ALPHA_WEBGL**: *37441*

*Defined in [src/js/GPX/webgl/constants.ts:1696](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1696)*

**`constant`** {number}

___

###  GL_UNPACK_ROW_LENGTH

Ƭ **GL_UNPACK_ROW_LENGTH**: *3314*

*Defined in [src/js/GPX/webgl/constants.ts:1717](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1717)*

**`constant`** {number}

___

###  GL_UNPACK_SKIP_IMAGES

Ƭ **GL_UNPACK_SKIP_IMAGES**: *32877*

*Defined in [src/js/GPX/webgl/constants.ts:1752](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1752)*

**`constant`** {number}

___

###  GL_UNPACK_SKIP_PIXELS

Ƭ **GL_UNPACK_SKIP_PIXELS**: *3316*

*Defined in [src/js/GPX/webgl/constants.ts:1727](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1727)*

**`constant`** {number}

___

###  GL_UNPACK_SKIP_ROWS

Ƭ **GL_UNPACK_SKIP_ROWS**: *3315*

*Defined in [src/js/GPX/webgl/constants.ts:1722](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1722)*

**`constant`** {number}

___

###  GL_UNSIGNALED

Ƭ **GL_UNSIGNALED**: *37144*

*Defined in [src/js/GPX/webgl/constants.ts:2932](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2932)*

**`constant`** {number}

___

###  GL_UNSIGNED_BYTE

Ƭ **GL_UNSIGNED_BYTE**: *5121*

*Defined in [src/js/GPX/webgl/constants.ts:799](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L799)*

**`constant`** {number}

___

###  GL_UNSIGNED_INT

Ƭ **GL_UNSIGNED_INT**: *5125*

*Defined in [src/js/GPX/webgl/constants.ts:819](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L819)*

**`constant`** {number}

___

###  GL_UNSIGNED_INT_10F_11F_11F_REV

Ƭ **GL_UNSIGNED_INT_10F_11F_11F_REV**: *35899*

*Defined in [src/js/GPX/webgl/constants.ts:2177](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2177)*

**`constant`** {number}

___

###  GL_UNSIGNED_INT_24_8

Ƭ **GL_UNSIGNED_INT_24_8**: *34042*

*Defined in [src/js/GPX/webgl/constants.ts:2192](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2192)*

**`constant`** {number}

___

###  GL_UNSIGNED_INT_24_8_WEBGL

Ƭ **GL_UNSIGNED_INT_24_8_WEBGL**: *34042*

*Defined in [src/js/GPX/webgl/constants.ts:3435](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L3435)*

Unsigned integer type for 24-bit depth texture data

**`constant`** {number}

___

###  GL_UNSIGNED_INT_2_10_10_10_REV

Ƭ **GL_UNSIGNED_INT_2_10_10_10_REV**: *33640*

*Defined in [src/js/GPX/webgl/constants.ts:2172](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2172)*

**`constant`** {number}

___

###  GL_UNSIGNED_INT_5_9_9_9_REV

Ƭ **GL_UNSIGNED_INT_5_9_9_9_REV**: *35902*

*Defined in [src/js/GPX/webgl/constants.ts:2182](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2182)*

**`constant`** {number}

___

###  GL_UNSIGNED_INT_SAMPLER_2D

Ƭ **GL_UNSIGNED_INT_SAMPLER_2D**: *36306*

*Defined in [src/js/GPX/webgl/constants.ts:2458](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2458)*

**`constant`** {number}

___

###  GL_UNSIGNED_INT_SAMPLER_2D_ARRAY

Ƭ **GL_UNSIGNED_INT_SAMPLER_2D_ARRAY**: *36311*

*Defined in [src/js/GPX/webgl/constants.ts:2473](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2473)*

**`constant`** {number}

___

###  GL_UNSIGNED_INT_SAMPLER_3D

Ƭ **GL_UNSIGNED_INT_SAMPLER_3D**: *36307*

*Defined in [src/js/GPX/webgl/constants.ts:2463](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2463)*

**`constant`** {number}

___

###  GL_UNSIGNED_INT_SAMPLER_CUBE

Ƭ **GL_UNSIGNED_INT_SAMPLER_CUBE**: *36308*

*Defined in [src/js/GPX/webgl/constants.ts:2468](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2468)*

**`constant`** {number}

___

###  GL_UNSIGNED_INT_VEC2

Ƭ **GL_UNSIGNED_INT_VEC2**: *36294*

*Defined in [src/js/GPX/webgl/constants.ts:2562](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2562)*

**`constant`** {number}

___

###  GL_UNSIGNED_INT_VEC3

Ƭ **GL_UNSIGNED_INT_VEC3**: *36295*

*Defined in [src/js/GPX/webgl/constants.ts:2567](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2567)*

**`constant`** {number}

___

###  GL_UNSIGNED_INT_VEC4

Ƭ **GL_UNSIGNED_INT_VEC4**: *36296*

*Defined in [src/js/GPX/webgl/constants.ts:2572](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2572)*

**`constant`** {number}

___

###  GL_UNSIGNED_NORMALIZED

Ƭ **GL_UNSIGNED_NORMALIZED**: *35863*

*Defined in [src/js/GPX/webgl/constants.ts:2577](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2577)*

**`constant`** {number}

___

###  GL_UNSIGNED_NORMALIZED_EXT

Ƭ **GL_UNSIGNED_NORMALIZED_EXT**: *35863*

*Defined in [src/js/GPX/webgl/constants.ts:3467](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L3467)*

**`constant`** {number}

___

###  GL_UNSIGNED_SHORT

Ƭ **GL_UNSIGNED_SHORT**: *5123*

*Defined in [src/js/GPX/webgl/constants.ts:809](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L809)*

**`constant`** {number}

___

###  GL_UNSIGNED_SHORT_4_4_4_4

Ƭ **GL_UNSIGNED_SHORT_4_4_4_4**: *32819*

*Defined in [src/js/GPX/webgl/constants.ts:863](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L863)*

**`constant`** {number}

___

###  GL_UNSIGNED_SHORT_5_5_5_1

Ƭ **GL_UNSIGNED_SHORT_5_5_5_1**: *32820*

*Defined in [src/js/GPX/webgl/constants.ts:868](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L868)*

**`constant`** {number}

___

###  GL_UNSIGNED_SHORT_5_6_5

Ƭ **GL_UNSIGNED_SHORT_5_6_5**: *33635*

*Defined in [src/js/GPX/webgl/constants.ts:873](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L873)*

**`constant`** {number}

___

###  GL_VALIDATE_STATUS

Ƭ **GL_VALIDATE_STATUS**: *35715*

*Defined in [src/js/GPX/webgl/constants.ts:912](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L912)*

Passed to getProgramParameter after calling validateProgram to determine if it is valid. Returns false if errors were found

**`constant`** {number}

___

###  GL_VENDOR

Ƭ **GL_VENDOR**: *7936*

*Defined in [src/js/GPX/webgl/constants.ts:514](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L514)*

**`constant`** {number}

___

###  GL_VERSION

Ƭ **GL_VERSION**: *7938*

*Defined in [src/js/GPX/webgl/constants.ts:524](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L524)*

**`constant`** {number}

___

###  GL_VERTEX_ARRAY_BINDING

Ƭ **GL_VERTEX_ARRAY_BINDING**: *34229*

*Defined in [src/js/GPX/webgl/constants.ts:1822](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L1822)*

**`constant`** {number}

___

###  GL_VERTEX_ARRAY_BINDING_OES

Ƭ **GL_VERTEX_ARRAY_BINDING_OES**: *34229*

*Defined in [src/js/GPX/webgl/constants.ts:3729](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L3729)*

The bound vertex array object (VAO)

**`constant`** {number}

___

###  GL_VERTEX_ATTRIB_ARRAY_BUFFER_BINDING

Ƭ **GL_VERTEX_ATTRIB_ARRAY_BUFFER_BINDING**: *34975*

*Defined in [src/js/GPX/webgl/constants.ts:628](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L628)*

**`constant`** {number}

___

###  GL_VERTEX_ATTRIB_ARRAY_DIVISOR

Ƭ **GL_VERTEX_ATTRIB_ARRAY_DIVISOR**: *35070*

*Defined in [src/js/GPX/webgl/constants.ts:2594](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2594)*

**`constant`** {number}

___

###  GL_VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE

Ƭ **GL_VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE**: *35070*

*Defined in [src/js/GPX/webgl/constants.ts:3059](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L3059)*

Describes the frequency divisor used for instanced rendering

**`constant`** {number}

___

###  GL_VERTEX_ATTRIB_ARRAY_ENABLED

Ƭ **GL_VERTEX_ATTRIB_ARRAY_ENABLED**: *34338*

*Defined in [src/js/GPX/webgl/constants.ts:598](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L598)*

**`constant`** {number}

___

###  GL_VERTEX_ATTRIB_ARRAY_INTEGER

Ƭ **GL_VERTEX_ATTRIB_ARRAY_INTEGER**: *35069*

*Defined in [src/js/GPX/webgl/constants.ts:2589](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2589)*

**`constant`** {number}

___

###  GL_VERTEX_ATTRIB_ARRAY_NORMALIZED

Ƭ **GL_VERTEX_ATTRIB_ARRAY_NORMALIZED**: *34922*

*Defined in [src/js/GPX/webgl/constants.ts:618](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L618)*

**`constant`** {number}

___

###  GL_VERTEX_ATTRIB_ARRAY_POINTER

Ƭ **GL_VERTEX_ATTRIB_ARRAY_POINTER**: *34373*

*Defined in [src/js/GPX/webgl/constants.ts:623](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L623)*

**`constant`** {number}

___

###  GL_VERTEX_ATTRIB_ARRAY_SIZE

Ƭ **GL_VERTEX_ATTRIB_ARRAY_SIZE**: *34339*

*Defined in [src/js/GPX/webgl/constants.ts:603](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L603)*

**`constant`** {number}

___

###  GL_VERTEX_ATTRIB_ARRAY_STRIDE

Ƭ **GL_VERTEX_ATTRIB_ARRAY_STRIDE**: *34340*

*Defined in [src/js/GPX/webgl/constants.ts:608](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L608)*

**`constant`** {number}

___

###  GL_VERTEX_ATTRIB_ARRAY_TYPE

Ƭ **GL_VERTEX_ATTRIB_ARRAY_TYPE**: *34341*

*Defined in [src/js/GPX/webgl/constants.ts:613](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L613)*

**`constant`** {number}

___

###  GL_VERTEX_SHADER

Ƭ **GL_VERTEX_SHADER**: *35633*

*Defined in [src/js/GPX/webgl/constants.ts:888](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L888)*

Passed to createShader to define a vertex shader

**`constant`** {number}

___

###  GL_VIEWPORT

Ƭ **GL_VIEWPORT**: *2978*

*Defined in [src/js/GPX/webgl/constants.ts:398](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L398)*

Returns an Int32Array with four elements for the current viewport dimensions

**`constant`** {number}

___

###  GL_WAIT_FAILED

Ƭ **GL_WAIT_FAILED**: *37149*

*Defined in [src/js/GPX/webgl/constants.ts:2957](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L2957)*

**`constant`** {number}

___

###  GL_ZERO

Ƭ **GL_ZERO**: *0*

*Defined in [src/js/GPX/webgl/constants.ts:89](https://github.com/devjeetr/shader-lib-2/blob/83bd8e1/src/js/GPX/webgl/constants.ts#L89)*

Passed to blendFunc or blendFuncSeparate to turn off a component

**`constant`** {number}
