pragma solidity >=0.4.21 < 0.7;

contract Vote {

    mapping (bytes32 => uint8) public receivedVoteCount;
    bytes32[] public candidates;

    function vote(bytes32[] memory _candidates) public  {
        candidates = _candidates;
    }

    function voteCountOfCandidate(bytes32 candidate) public view returns(uint8) {
        require(
            validateCandidate(candidate),
            "Invalid Candidate Name");
        return receivedVoteCount[candidate];
    }

    function validateCandidate(bytes32 candidate) public view returns(bool) {
        for(uint i = 0; i<candidates.length; i++){
            if(candidates[i] == candidate){
                return true;
            }
        }
        return false;
    }

    function voteForCandidate(bytes32 candidate) public {
        require(
                validateCandidate(candidate),
                 "Invalid Candidate Name!"
        );
        receivedVoteCount[candidate] += 1;
    }

    function getCandidateList() public view returns(bytes32[] memory) {
        return candidates;
    }
}