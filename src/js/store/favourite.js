class Favorites {
    constructor() {
      this.store = [];
    }
   
    addTicketToStore(ticket) {
      if(!this.store.length) {
        this.store.push(ticket);
      }
      this.store = this.store.filter(item => {
        return JSON.stringify(item) !== JSON.stringify(ticket);
      });
      this.store.push(ticket);
    }
   
    removeTicketFromStore(ticket) {
      this.store = this.store.filter(item => {
        return JSON.stringify(item) !== JSON.stringify(ticket);
      });
    }
  }
   
  const favorites = new Favorites();
  export default favorites;