import { Command } from "@oclif/command";
import { TagsResponse } from "../types";
import { bearExec } from "../utils/bear-exec";
import { logTags } from "../utils/log";
import { getToken } from "../utils/config";
import cmdFlags from "../utils/flags";

export default class Tags extends Command {
  static description = [
    "Fetch all the tags currently displayed in Bear's sidebar.",
    "Returns list of tag names."
  ].join("\n");

  static flags = {
    help: cmdFlags.help
  };

  async run() {
    const token = getToken(this.config.configDir);
    const response = await bearExec<TagsResponse>("tags", { token });
    logTags(response);
  }
}
