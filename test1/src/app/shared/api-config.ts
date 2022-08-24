export class ApiConfig{
  static readonly API_URL = "http://127.0.0.1/project_online_7_10_1_js_php/test4/test4/server"
  static createURL(query: string){
      return `${this.API_URL}/${query}`;
  }

}
