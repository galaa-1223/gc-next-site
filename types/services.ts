export interface Service {
  img: string;
  title: string;
  tags: string[];
  desc: string;
  button: {
    text: string
    href: string
  }
}

export interface Service2 {
  title: string;
  image: string;
  desc: string;
  tags: string[];
  button?: string 
}
