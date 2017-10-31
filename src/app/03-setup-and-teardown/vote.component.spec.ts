import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
  // Arrange
  let component: VoteComponent;

  beforeEach(() => {
    component = new VoteComponent();
  });

  it('should increment totalVotes when upvoted', () => {
    // Act
    component.upVote();

    // Assert
    expect(component.totalVotes).toBe(1);
  });

  it('should decrement totalVotes when downvoted', () => {
    // Arrange
    let component = new VoteComponent();

    // Act
    component.downVote();

    // Assert
    expect(component.totalVotes).toBe(-1);
  });
});
