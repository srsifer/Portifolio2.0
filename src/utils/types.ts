export interface ProjectCardsProps {
  data: {
    name: string,
    homepage: string,
    languages_url: string,
    created_at: string,
    clone_url: string,
    commits_url: string,
  },

  images: {
    blurDataURL: string,
    height: number,
    src: string,
    width: number,
  } | any
}
