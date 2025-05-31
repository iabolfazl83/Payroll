function path(root: string, subPath: string) {
  return `${root}${subPath}`;
}

const BASE_PATH_RESUME = "/resume";

export const PATH = {
  ResumeEmpty: path(BASE_PATH_RESUME, ""),
  ResumeInfo: path(BASE_PATH_RESUME, "/info"),
};