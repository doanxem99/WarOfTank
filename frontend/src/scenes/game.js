import MapGenerator from '../utils/mapGenerator.js';
import { fetchMCTSAction, fetchMARLAction } from '../utils/api.js'; // Import the MCTS API function

// Template for the game scene
export default class GameScene extends Phaser.Scene {
    constructor() {
        super({ key: 'GameScene' });
    }

    preload() {
    }

    create() {
        this.createMap();
        this.createPlayer();
        this.createEnemies();
        //... other game objects
        this.input.on('keydown', this.handleInput, this);
    }
    
    createMap() {
        const mapGenerator = new MapGenerator(this);
        this.map = mapGenerator.generateMap(10, 10); // Example size
        this.add.existing(this.map);
    }

    handleInput(event) {
        // Xử lý input từ bàn phím, chuyển hướng di chuyển hoặc kích hoạt hành động
        // Ví dụ: nếu người chơi nhấn phím 'A', gọi API để lấy hành động AI cho enemy
        if (event.key === 'A') {
          // Giả sử gọi API cho enemy với thuật toán MCTS
          const currentState = this.getCurrentGameState();
          fetchMCTSAction(currentState).then(response => {
            this.executeEnemyAction(response.action);
          });
        }
      }
    
      getCurrentGameState() {
        // Trả về trạng thái game hiện tại dưới dạng JSON (ví dụ: vị trí các đối tượng, mapData,...)
        return {
          player: { x: this.player.x, y: this.player.y },
          enemies: this.enemies.getChildren().map(enemy => ({ x: enemy.x, y: enemy.y })),
          map: this.mapData
        };
      }
    
      executeEnemyAction(action) {
        // Thực hiện hành động của enemy dựa theo kết quả từ API
        console.log("Enemy action: ", action);
        // Xử lý theo logic game cụ thể
        // Template action
        // {
        //     [
        //         "move": { x: 1, y: 0 }, // Di chuyển sang phải
        //         "attack": 1/0, // Tấn công người chơi
        //         "defend": 1/0, // Phòng thủ xong thì mất lượt
        //         "skip": 1/0 // Bỏ lượt
        //         "useItem": { itemId: 123 }, // Sử dụng item như boost tốc độ, ..., còn thời gian thì làm..
        //     ],
        //     //... các hành động khác
        // }
      }

}