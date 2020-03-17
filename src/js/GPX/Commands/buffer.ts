import GPX, { ProgramState } from "../GPX";

import { BufferResource } from "../resources/buffer";
import { Command } from "./types";
import { createResolver } from "./helpers";

export type BufferOptions = Omit<Buffer, "handle">;

/**
 * Generates a command that binds the given buffer to
 * the buffer's target.
 * @param name The name of the buffer to be bound.
 * @returns the newly generated command
 *
 */
export const bindBuffer = (buffer: BufferResource): Command =>
  createResolver((state: ProgramState) => {
    buffer.bind();
  });
