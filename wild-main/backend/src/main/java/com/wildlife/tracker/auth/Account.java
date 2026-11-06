package com.wildlife.tracker.auth;

import java.io.Serializable;

public record Account(long id, String username, String email) implements Serializable {}
