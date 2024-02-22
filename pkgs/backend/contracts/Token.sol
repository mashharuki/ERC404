// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

// Importing DN404 token contract
import "./lib/DN404.sol";
// Importing DN404Mirror contract from external source
import "dn404/src/DN404Mirror.sol";
// Importing Ownable contract from solady library
import {Ownable} from "solady/src/auth/Ownable.sol";
// Importing LibString contract from solady library
import {LibString} from "solady/src/utils/LibString.sol";
// Importing SafeTransferLib contract from solady library
import {SafeTransferLib} from "solady/src/utils/SafeTransferLib.sol";
// Importing MerkleProofLib contract from solady library
import {MerkleProofLib} from "solady/src/utils/MerkleProofLib.sol";

/**
 * NFTMintDN404 Contract
 */
contract NFTMintDN404 is DN404, ERC20Permit, Ownable{
	string private _name;
    string private _symbol;
    string private _baseURI;
    bytes32 private allowlistRoot;
    uint120 public publicPrice;
    uint120 public allowlistPrice;
    bool public live;
    uint256 public numMinted;
    uint256 public MAX_SUPPLY;

}