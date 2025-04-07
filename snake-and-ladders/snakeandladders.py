import random
import time
from collections import defaultdict

class SnakeAndLadders:
    def __init__(self, num_players, board_size=100):
        self.board_size = board_size
        self.player_positions = [0] * num_players
        self.player_names = [f"Player {i+1}" for i in range(num_players)]
        self.current_player = 0
        self.winner = None
        self.game_over = False
        
        self.snakes = {
            16: 6,
            47: 26,
            49: 11,
            56: 53,
            62: 19,
            64: 60,
            87: 24,
            93: 73,
            95: 75,
            98: 78
        }
        
        self.ladders = {
            1: 38,
            4: 14,
            9: 31,
            21: 42,
            28: 84,
            36: 44,
            51: 67,
            71: 91,
            80: 100
        }
        
        self.dice_rolls = []
        self.snake_encounters = defaultdict(int)
        self.ladder_climbs = defaultdict(int)
        self.moves_taken = 0

    def roll_dice(self):
        return random.randint(1, 6)
    
    def display_board(self):
        print("\n" + "=" * 50)
        print("SNAKE AND LADDERS GAME")
        print("=" * 50)
        
        print("\nSNAKES: ", end="")
        for start, end in self.snakes.items():
            print(f"{start}→{end}", end=", ")
        
        print("\nLADDERS: ", end="")
        for start, end in self.ladders.items():
            print(f"{start}→{end}", end=", ")
        
        print("\n\nCURRENT POSITIONS:")
        for i, name in enumerate(self.player_names):
            position = self.player_positions[i]
            print(f"{name}: {position}", end="  ")
        print("\n" + "-" * 50)
    
    def move_player(self, player_idx, steps):
        current_pos = self.player_positions[player_idx]
        new_pos = current_pos + steps
        
        if new_pos > self.board_size:
            print(f"{self.player_names[player_idx]} rolled too high, stays at {current_pos}")
            return current_pos
        
        if new_pos in self.snakes:
            print(f"OOPS! {self.player_names[player_idx]} got bitten by a SNAKE at {new_pos}")
            new_pos = self.snakes[new_pos]
            print(f"{self.player_names[player_idx]} slides down to {new_pos}")
            self.snake_encounters[player_idx] += 1
        
        elif new_pos in self.ladders:
            print(f"YAY! {self.player_names[player_idx]} found a LADDER at {new_pos}")
            new_pos = self.ladders[new_pos]
            print(f"{self.player_names[player_idx]} climbs up to {new_pos}")
            self.ladder_climbs[player_idx] += 1
        
        self.player_positions[player_idx] = new_pos
        
        if new_pos == self.board_size:
            self.winner = player_idx
            self.game_over = True
            
        return new_pos
    
    def next_turn(self):
        if self.game_over:
            return
        
        player_idx = self.current_player
        player_name = self.player_names[player_idx]
        
        print(f"\n{player_name}'s turn...")
        input("Press Enter to roll the dice...")
        
        dice_value = self.roll_dice()
        self.dice_rolls.append(dice_value)
        self.moves_taken += 1
        
        print(f"{player_name} rolled: {dice_value}")
        new_position = self.move_player(player_idx, dice_value)
        
        self.current_player = (self.current_player + 1) % len(self.player_names)
    
    def display_statistics(self):
        print("\n" + "=" * 50)
        print("GAME STATISTICS")
        print("=" * 50)
        print(f"Total moves: {self.moves_taken}")
        print(f"Average dice roll: {sum(self.dice_rolls) / len(self.dice_rolls):.2f}")
        
        print("\nSnake encounters:")
        for player_idx, count in self.snake_encounters.items():
            print(f"{self.player_names[player_idx]}: {count}")
        
        print("\nLadder climbs:")
        for player_idx, count in self.ladder_climbs.items():
            print(f"{self.player_names[player_idx]}: {count}")
    
    def play(self):
        print("Welcome to Snake and Ladders!")
        print(f"Board size: {self.board_size}")
        print(f"Number of players: {len(self.player_names)}")
        
        while not self.game_over:
            self.display_board()
            self.next_turn()
            time.sleep(1)
        
        self.display_board()
        print("\n" + "=" * 50)
        print(f"GAME OVER! {self.player_names[self.winner]} WINS!")
        print("=" * 50)
        
        self.display_statistics()


def main():
    while True:
        try:
            num_players = int(input("Enter number of players (2-4): "))
            if 2 <= num_players <= 4:
                break
            else:
                print("Please enter a number between 2 and 4.")
        except ValueError:
            print("Please enter a valid number.")
    
    game = SnakeAndLadders(num_players)
    
    customize = input("Would you like to customize player names? (y/n): ").lower()
    if customize == 'y':
        for i in range(num_players):
            name = input(f"Enter name for Player {i+1}: ")
            if name:
                game.player_names[i] = name
    
    game.play()
    
    play_again = input("\nDo you want to play again? (y/n): ").lower()
    if play_again == 'y':
        main()
    else:
        print("Thanks for playing! Goodbye!")


if __name__ == "__main__":
    main()